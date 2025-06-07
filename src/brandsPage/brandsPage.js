import React, { useEffect, useState } from 'react';
import './brandsPage.css';
import { useLocation } from 'react-router-dom';

const BrandPage = () => {
  const [brands, setBrands] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    const brandLogos = [
      { name: 'bandhan', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bandhan.png' },
      { name: 'jaquar', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar.svg' },
      { name: 'essco', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/essco.png' },
      { name: 'kohler', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kohler1.png' },
      { name: 'rak', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/rak.jpg' },
      { name: 'sonnet', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sonnet.jpeg' },
      { name: 'grohe', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grohe.png' },
      { name: 'americanstandard', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/americanstandard.png' },
      { name: 'nirali', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali%20logo.jpeg' },
      { name: 'carysil', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png' },
      { name: 'aosmith', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/aosmith.webp' },
      { name: 'qutone', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/qutone.jpg' },
      { name: 'pavit', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/pavit.png' },
      { name: 'kajaria', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kajaria.jpeg' },
      { name: 'legrand', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand%20logo.png' },
      { name: 'havells', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png' },
      { name: 'finolex', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png' },
      { name: 'philips', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png' },
      { name: 'sudhakar', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png' },
      { name: 'prince', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince%20logo.jpg' },
      { name: 'luker', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker%20logo.jpg' },
      { name: 'crompton', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/crompton.svg' },
      { name: 'atomberg', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/atomberg.webp' },
      { name: 'orient', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/orient.png' },
      { name: 'besten', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten%20logo.png' },
      { name: 'wilo', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/wilo.png' },
      { name: 'geberit', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/geberit.png' },
      { name: 'berger', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/berger.jpg' },
      { name: 'kuka', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka%20logo.png' },
      { name: 'anchor', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor%20logo.png' },
      { name: 'austin', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin%20logo.png' },
      { name: 'cri', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri%20logo.png' },
      { name: 'elleys', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys%20Logo.png' },
      { name: 'eureka', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka%20logo.jpg' },
      { name: 'euroqo', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo%20logo.jpg' },
      { name: 'franke', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke%20logo.png' },
      { name: 'hifi', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi%20fi%20logo.png' },
      { name: 'kolors', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors%20logo.png' },
      { name: 'norisys', url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys%20logo.png' }
    ];

    const filtered = brandLogos.filter(brand =>
      brand.name.toLowerCase().includes(searchQuery)
    );

    setBrands(filtered);
  }, [searchQuery]);

  return (
    <div className="brandspage-page" id="brands-section">
      <h1 className="brandspage-title">Brands We Provide</h1>
      <div className="brandspage-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brandspage-card">
            <img src={brand.url} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
