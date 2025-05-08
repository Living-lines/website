import React, { useEffect, useState } from 'react';
import './brandsPage.css';

const BrandPage = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const brandLogos = [
        'assets/anchor logo.png',
        'assets/astral pipes logo.jpg',
        'assets/austin logo.png',
        'assets/besten logo.png',
        'assets/carysil logo.png',
        'assets/cri logo.png',
        'assets/elleys Logo.png',
        'assets/eureka logo.jpg',
        'assets/euroqo logo.jpg',
        'assets/finolex logo.png',
        'assets/franke logo.png',
        'assets/havells logo.png',
        'assets/hi fi logo.png',
        'assets/jaquar logo.png',
        'assets/kolors logo.png',
        'assets/kuka logo.png',
        'assets/legrand logo.png',
        'assets/luker logo.jpg',
        'assets/nirali logo.jpeg',
        'assets/norisys logo.png',
        'assets/philips logo.png',
        'assets/prince logo.jpg',
        'assets/sudhakar pipes logo.png',
        'assets/v-guard logo (1).png',
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
