import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import Popup from "./Popup";

const BASE_URL = 'http://localhost:3001';

const staticImages = {
  bathroom: [...Array(9).keys()].map(i => ({
    path: `bathroom/bath${i + 1}.jpg`,
    name: "Bath",
    brand: "Generic",
    type: "Bathroom",
    id: `bath-${i}`,
    image: `${BASE_URL}/product_images/bathroom/bath${i + 1}.jpg`
  })),
  house: [...Array(9).keys()].map(i => ({
    path: `house/house${i + 1}.jpg`,
    name: "House",
    brand: "Generic",
    type: "House",
    id: `house-${i}`,
    image: `${BASE_URL}/product_images/house/house${i + 1}.jpg`
  })),
  kitchen: [...Array(9).keys()].map(i => ({
    path: `kitchen/k${i + 1}.jpg`,
    name: "Kitchen",
    brand: "Generic",
    type: "Kitchen",
    id: `kitchen-${i}`,
    image: `${BASE_URL}/product_images/kitchen/k${i + 1}.jpg`
  })),
  sink: [...Array(9).keys()].map(i => ({
    path: `sinks/sink${i + 1}.jpg`,
    name: "Sink",
    brand: "Generic",
    type: "Sink",
    id: `sink-${i}`,
    image: `${BASE_URL}/product_images/sinks/sink${i + 1}.jpg`
  })),
};

const ProductPager = () => {
  const [filters, setFilters] = useState({
    bathroom: false,
    house: false,
    kitchen: false,
    sink: false,
    admin: false
  });

  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const fetchAdminProducts = () => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(prod =>
          prod.model_name &&
          prod.model_name !== "Air Max" &&
          prod.image_url &&
          !prod.image_url.includes("airmax.jpg")
        );

        const formatted = filtered.map((prod, index) => ({
          id: `admin-${index}`,
          name: prod.model_name,
          brand: prod.brand,
          type: prod.product_type,
          image: prod.image_url,
          path: ""
        }));

        setDynamicProducts(formatted);
      })
      .catch(err => console.error('❌ Failed to load admin-added products:', err));
  };

  useEffect(() => {
    fetchAdminProducts();

    const handleProductAdded = () => {
      fetchAdminProducts();
    };

    window.addEventListener("product-added", handleProductAdded);

    return () => {
      window.removeEventListener("product-added", handleProductAdded);
    };
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const toggleMobileFilters = () => setShowMobileFilters(!showMobileFilters);

  const handleFilterChanger = (category) => {
    setFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const filteredStaticImages = Object.keys(filters).reduce((acc, category) => {
    if (category !== 'admin' && filters[category]) {
      acc = acc.concat(staticImages[category]);
    }
    return acc;
  }, []);

  const allStaticImages = Object.values(staticImages).flat();
  const allImagesToDisplay =
    filteredStaticImages.length > 0 || filters.admin
      ? [...(filters.admin ? dynamicProducts : []), ...filteredStaticImages]
      : [...dynamicProducts, ...allStaticImages];

  return (
    <div className="products-pager">
      <button className="hamburger-icon" onClick={toggleMobileFilters}>☰</button>

      <div className={`filters-sectionr ${showMobileFilters ? 'show-mobile-filters' : ''}`}>
        <h2 className="underline-heading">Filter <span className="icon-filter">🔍</span></h2>

        {["house", "kitchen", "bathroom", "sink", "admin"].map((cat) => (
          <div className="filter-headingr" key={cat}>
            <div>{cat === 'admin' ? 'Admin Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}</div>
            <input type="checkbox" checked={filters[cat]} onChange={() => handleFilterChanger(cat)} />
          </div>
        ))}

        <button className="refresh-button" onClick={fetchAdminProducts}>🔁 Refresh Admin Products</button>
      </div>

      <div className="products-sectionr">
        <div className="product-cardsr">
          {allImagesToDisplay.map((item, index) => (
            <div key={item.id || index} className="product-cardr" onClick={() => handleImageClick(item)}>
              <img src={item.image} alt={`Product ${index}`} className="product-imgr" />
              <div className="product-infor">
                <h4>Section: {item.name}</h4>
              </div>
            </div>
          ))}
        </div>
        {showPopup && <Popup onClose={handleClosePopup} product={selectedProduct} />}
      </div>
    </div>
  );
};

export default ProductPager;
