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
    name: 'grove.png',
    url: 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grove.png'
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
