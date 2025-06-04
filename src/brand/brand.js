import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./brand.css"; // Import CSS file

// Commented out local image address
// import gessi from "../assets/gessi.png";
// import grohe from "../assets/grohe (2).png";
// import toto from "../assets/toto.png";
// import kohler from "../assets/kohler.png";
// import kuka from "../assets/kuka.png";

// Using image URLs instead
const brands = [
  
  {
    name: 'carysil logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png'
  },
  {
    name: 'finolex logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png'
  },
  
  {
    name: 'havells logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png'
  },
  
  {
    name: 'jaquar logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar%20logo.png'
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
    name: 'philips logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png'
  },
  {
    name: 'sudhakar pipes logo.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png'
  },
  {
    name: 'bandhan.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bandhan.png'
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
    name: 'grohe.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grohe.png'
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
];

const BrandCarousel = () => {
  return (
    <div className="carousel-container">
      <h1 className="products-heading">
        Our Premium Brands <span className="underline"></span>
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="logo-container">
              <img src={brand.url} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}{brands.map((brand, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="logo-container">
              <img src={brand.url} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
