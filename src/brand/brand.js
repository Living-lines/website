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
    name: "GESSI",
    logo: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/gessi.png"
  },
  {
    name: "GROHE",
    logo: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grohe (2).png"
  },
  {
    name: "TOTO",
    logo: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/toto.png"
  },
  {
    name: "KOHLER",
    logo: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kohler.png"
  },
  {
    name: "KUKA",
    logo: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka.png"
  }
];

const BrandCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Our Premium Brands</h2>
      <Swiper
        modules={[Autoplay]}
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
