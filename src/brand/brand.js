import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./brand.css";

const brands = [
  { name: "bandhan.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/bandhan.png" },
  { name: "jaquar.svg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/jaquar.svg" },
  { name: "essco.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/essco.png" },
  { name: "kohler1.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kohler1.png" },
  { name: "rak.jpg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/rak.jpg" },
  { name: "sonnet.jpeg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sonnet.jpeg" },
  { name: "grohe.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/grohe.png" },
  { name: "americanstandard.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/americanstandard.png" },
  { name: "nirali logo.jpeg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/nirali%20logo.jpeg" },
  { name: "carysil logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/carysil%20logo.png" },
  { name: "aosmith.webp", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/aosmith.webp" },
  { name: "qutone.jpg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/qutone.jpg" },
  { name: "pavit.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/pavit.png" },
  { name: "kajaria.jpeg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kajaria.jpeg" },
  { name: "legrand logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/legrand%20logo.png" },
  { name: "havells logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/havells%20logo.png" },
  { name: "finolex logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/finolex%20logo.png" },
  { name: "philips logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/philips%20logo.png" },
  { name: "sudhakar pipes logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/sudhakar%20pipes%20logo.png" },
  { name: "prince logo.jpg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/prince%20logo.jpg" },
  { name: "luker logo.jpg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/luker%20logo.jpg" },
  { name: "crompton.svg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/crompton.svg" },
  { name: "atomberg.webp", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/atomberg.webp" },
  { name: "orient.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/orient.png" },
  { name: "besten logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/besten%20logo.png" },
  { name: "wilo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/wilo.png" },
  { name: "geberit.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/geberit.png" },
  { name: "berger.jpg", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/berger.jpg" },
  { name: "kuka logo.png", url: "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/kuka%20logo.png" }
];

const BrandCarousel = () => {
  const [autoplayDirection, setAutoplayDirection] = useState("next");
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (event) => {
    if (event.deltaY > 0) setAutoplayDirection("next");
    else setAutoplayDirection("prev");
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = (event) => {
    if (isDragging) {
      const touchEndX = event.changedTouches[0].pageX;
      const touchStartX = event.touches[0]?.pageX || 0;
      if (touchEndX > touchStartX) setAutoplayDirection("prev");
      else setAutoplayDirection("next");
      setIsDragging(false);
    }
  };

  return (
    <div
      className="carousel-container"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="products-heading">
        Our Premium Brands <span className="underline"></span>
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: autoplayDirection === "prev"
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        className="swiper-container"
      >
        {brands.map((brand, index) => (
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
