import React, { useEffect, useState } from 'react';
import './brandsPage.css';

import { useLocation } from 'react-router-dom';


const BrandPage = () => {
  const [brands, setBrands] = useState([]);


  const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const searchQuery = searchParams.get('search')?.toLowerCase() || '';


/* const filtered = brandLogos.filter(brand =>
  brand.name.toLowerCase().includes(searchQuery)
);
setBrands(filtered); */


  /*useEffect(() => {
    const fetchBrands = async () => {
      // Commented out local image address @harsha sir if needed uncomment them
      // const brandLogos = [
      //   'assets/anchor logo.png',
      //   'assets/astral pipes logo.jpg',
      //   'assets/austin logo.png',
      //   'assets/besten logo.png',
      //   'assets/carysil logo.png',
      //   'assets/cri logo.png',
      //   'assets/elleys Logo.png',
      //   'assets/eureka logo.jpg',
      //   'assets/euroqo logo.jpg',
      //   'assets/finolex logo.png',
      //   'assets/franke logo.png',
      //   'assets/havells logo.png',
      //   'assets/hi fi logo.png',
      //   'assets/jaquar logo.png',
      //   'assets/kolors logo.png',
      //   'assets/kuka logo.png',
      //   'assets/legrand logo.png',
      //   'assets/luker logo.jpg',
      //   'assets/nirali logo.jpeg',
      //   'assets/norisys logo.png',
      //   'assets/philips logo.png',
      //   'assets/prince logo.jpg',
      //   'assets/sudhakar pipes logo.png',
      //   'assets/v-guard logo (1).png',
      // ];

      // Using hosted image URLs
      const brandLogos = [
        {
          name: 'anchor logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor%20logo.png'
        },
        {
          name: 'astral pipes logo.jpg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/astral%20pipes%20logo.jpg'
        },
        {
          name: 'austin logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin%20logo.png'
        },
        {
          name: 'besten logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten%20logo.png'
        },
        {
          name: 'carysil logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png'
        },
        {
          name: 'cri logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri%20logo.png'
        },
        {
          name: 'elleys Logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys%20Logo.png'
        },
        {
          name: 'eureka logo.jpg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka%20logo.jpg'
        },
        {
          name: 'euroqo logo.jpg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo%20logo.jpg'
        },
        {
          name: 'finolex logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png'
        },
        {
          name: 'franke logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke%20logo.png'
        },
        {
          name: 'havells logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png'
        },
        {
          name: 'hi fi logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi%20fi%20logo.png'
        },
        {
          name: 'jaquar logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar%20logo.png'
        },
        {
          name: 'kolors logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors%20logo.png'
        },
        {
          name: 'kuka logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka%20logo.png'
        },
        {
          name: 'legrand logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand%20logo.png'
        },
        {
          name: 'luker logo.jpg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker%20logo.jpg'
        },
        {
          name: 'nirali logo.jpeg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali%20logo.jpeg'
        },
        {
          name: 'norisys logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys%20logo.png'
        },
        {
          name: 'philips logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png'
        },
        {
          name: 'prince logo.jpg',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince%20logo.jpg'
        },
        {
          name: 'sudhakar pipes logo.png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png'
        },
        {
          name: 'v-guard logo (1).png',
          url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/v-guard%20logo%20(1).png'
        }
      ];

      setBrands(brandLogos);
    };

    fetchBrands();
  }, []);  */


  useEffect(() => {
 const brandLogos = [
  {
    name: 'bandhan.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bandhan.png'
  },
  {
    name: 'jaquar.svg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar.svg'
  },
  {
    name: 'essco.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/essco.png'
  },
  {
    name: 'kohler1.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kohler1.png'
  },
  {
    name: 'rak.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/rak.jpg'
  },
  {
    name: 'sonnet.jpeg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sonnet.jpeg'
  },
  {
    name: 'grohe logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grohe.png'
  },
  {
    name: 'nirali logo.jpeg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali%20logo.jpeg'
  },
  {
    name: 'carysil logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png'
  },
  {
    name: 'aosmith.webp',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/aosmith.webp'
  },
  {
    name: 'qutone.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/qutone.jpg'
  },
  {
    name: 'pavit.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/pavit.png'
  },
  {
    name: 'kajaria.jpeg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kajaria.jpeg'
  },
  {
    name: 'legrand logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand%20logo.png'
  },
  {
    name: 'havells logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png'
  },
  {
    name: 'finolex logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png'
  },
  {
    name: 'philips logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png'
  },
  {
    name: 'sudhakar pipes logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png'
  },
  {
    name: 'prince logo.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince%20logo.jpg'
  },
  {
    name: 'luker logo.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker%20logo.jpg'
  },
  {
    name: 'crompton.svg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/crompton.svg'
  },
  {
    name: 'atomberg.webp',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/atomberg.webp'
  },
  {
    name: 'orient.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/orient.png'
  },
  {
    name: 'besten logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten%20logo.png'
  },
  {
    name: 'wilo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/wilo.png'
  },
  {
    name: 'geberit.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/geberit.png'
  },
  {
    name: 'berger.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/berger.jpg'
  },
  {
    name: 'kuka logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka%20logo.png'
  },
  {
    name: 'anchor logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/anchor%20logo.png'
  },
  {
    name: 'austin logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/austin%20logo.png'
  },
  {
    name: 'cri logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/cri%20logo.png'
  },
  {
    name: 'elleys Logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/elleys%20Logo.png'
  },
  {
    name: 'eureka logo.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/eureka%20logo.jpg'
  },
  {
    name: 'euroqo logo.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/euroqo%20logo.jpg'
  },
  {
    name: 'franke logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/franke%20logo.png'
  },
  {
    name: 'hi fi logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/hi%20fi%20logo.png'
  },
  {
    name: 'kolors logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kolors%20logo.png'
  },
  {
    name: 'norisys logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/norisys%20logo.png'
  },

  /*{
    name: 'astral pipes logo.jpg',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/astral%20pipes%20logo.jpg'
  }*/,
  {
    name: 'jaguar logo1.avif',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaguar%20logo1.avif'
  },

];


 const filtered = brandLogos.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery)
  );

  setBrands(filtered);
}, [searchQuery]);


  return (
    <div className="brand-page" id="brands-section">
      <h1 className="brand-title">Brands We Provide</h1>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.url} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
