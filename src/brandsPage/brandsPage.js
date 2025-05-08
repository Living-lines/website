import React, { useEffect, useState } from 'react';
import './brandsPage.css';

const BrandPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const brandLogos = [
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/astral pipes logo.jpg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys Logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka logo.jpg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo logo.jpg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi fi logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker logo.jpg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali logo.jpeg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince logo.jpg',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar pipes logo.png',
        'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/v-guard logo (1).png',
      ];
      setBrands(brandLogos);
    };

    fetchBrands();
  }, []);

  return (
    <div className="brand-page" id="brands-section"> 
      <h1 className="brand-title">Brands We Provide</h1>
      <div className="brand-grid">
        {brands.map((logo, index) => (
          <div key={index} className="brand-card">
            <img src={require(`../${logo}`)} alt={`Brand ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
