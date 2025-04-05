import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Remove Navigation import
import "swiper/css";
import "swiper/css/autoplay";
import "./brand.css"; // Import CSS file

import gessi from "../assets/gessi.png";
import grohe from "../assets/grohe (2).png";
import toto from "../assets/toto.png";
import kohler from "../assets/kohler.png";
import kuka from "../assets/kuka.png";

const brands = [
  { name: "GESSI", logo: gessi },
  { name: "GROHE", logo: grohe },
  { name: "TOTO", logo: toto },
  { name: "KOHLER", logo: kohler },
  { name: "KUKA", logo: kuka }
];

const BrandCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Our Premium Brands</h2>
      <Swiper
        modules={[Autoplay]} // Only use Autoplay now
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
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
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
