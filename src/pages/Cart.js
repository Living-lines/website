import React, { useState, useEffect, useRef } from 'react';
import './Cart.css';
import Popup from './Popup';
import MultiPopup from './MultiPopup';

const PLACEHOLDER = 'https://via.placeholder.com/100';

// ensure absolute URL if backend ever returns relative paths
const toAbsolute = (url) => {
  if (!url) return '';
  if (/^https?:\/\//i.test(url)) return url;
  const base =
    (typeof window !== 'undefined' && (process.env.NEXT_PUBLIC_ASSET_HOST || window.location.origin)) ||
    process.env.NEXT_PUBLIC_ASSET_HOST ||
    '';
  return url.startsWith('/') ? `${base}${url}` : `${base}/${url}`;
};

// pick the first usable image URL from the cart item
const getFirstImageFromCartItem = (item) => {
  // prefer the single image string saved by ProductPager
  const single = typeof item?.image === 'string' ? item.image.trim() : '';

  // keep compatibility if some items still have an images array
  const fromArray =
    Array.isArray(item?.images) && typeof item.images[0] === 'string'
      ? item.images[0].trim()
      : '';

  let src = single || fromArray || '';
  if (src && !/^https?:\/\//i.test(src)) {
    src = toAbsolute(src);
  }
  return src || PLACEHOLDER;
};


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const hasMounted = useRef(false);
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      try {
        setCartItems(JSON.parse(storedItems));
      } catch (err) {
        console.error('Error parsing cart items:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      hasMounted.current = true;
    }
  }, [cartItems]);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleQuoteSubmit = async (userData) => {
    try {
      const validItems = cartItems.filter(item =>
        item.name && item.brand && item.type && item.image && item.name.trim() && item.brand.trim()
      );

      if (validItems.length === 0) {
        alert('No valid items to submit. Ensure product name, brand, type, and image are not empty.');
        return;
      }

      const responses = await Promise.all(validItems.map(item =>
        fetch('https://backend-tawny-one-62.vercel.app/api/quotes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...userData,
            product_id: item.id,
            product_name: item.name,
            product_brand: item.brand,
            product_type: item.type,
            image_url: item.image,
            requested_at: new Date().toISOString()
          })
        })
      ));

      const failed = responses.filter(res => !res.ok);
      if (failed.length > 0) {
        console.warn(`${failed.length} quote(s) failed.`);
        alert(' Some quotes failed to send. Please try again.');
      } else {
        alert(' All quotes sent successfully!');
        setShowSuccessMessage(true);
      }

    } catch (error) {
      console.error(' Error sending quote requests:', error);
      alert(' Failed to send quote request(s). Please try again.');
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img
  src={getFirstImageFromCartItem(item)}
  alt={item.name || 'Product'}
  className="cart-item-image"
  onError={(e) => {
    if (e.currentTarget.src !== PLACEHOLDER) {
      e.currentTarget.src = PLACEHOLDER;
    }
  }}
/>

              <div className="cart-item-details">
                <h4>{item.type || 'N/A'}</h4>
                <p>{item.brand || 'N/A'}</p>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQty(item.id)} disabled={item.quantity === 1}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <div className="cart-item-remove">
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="request-quote-btn" onClick={() => setShowQuotePopup(true)}>
            Request Quote
          </button>
        </>
      )}

      {showQuotePopup && (
        <MultiPopup
  cartItems={cartItems} 
  onClose={() => setShowQuotePopup(false)}
/>

      )}
    </div>
  );
}

export default Cart;
