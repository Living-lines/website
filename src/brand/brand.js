// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// // import Image from "next/image";

// const brands = [
//   { name: "GESSI", src: "/brands/gessi.png" },
//   { name: "GROHE", src: "/brands/grohe.png" },
//   { name: "TOTO", src: "/brands/toto.png" },
//   { name: "KOHLER", src: "/brands/kohler.png" },
//   { name: "VitrA", src: "/brands/vitra.png" },
//   { name: "Roca", src: "/brands/roca.png" },
//   { name: "Armani Roca", src: "/brands/armani-roca.png" },
//   { name: "Delta", src: "/brands/delta.png" },
//   { name: "Brizo", src: "/brands/brizo.png" },
//   { name: "Parryware", src: "/brands/parryware.png" },
//   { name: "BX Bath Xperience", src: "/brands/bx.png" },
// ];

// export default function BrandCarousel() {
//   return (
//     <div className="bg-black py-8">
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         loop={true}
//         navigation={true}
//         modules={[Navigation]}
//         className="w-full"
//       >
//         {brands.map((brand, index) => (
//           <SwiperSlide key={index} className="flex justify-center">
//             <Image
//               src={brand.src}
//               alt={brand.name}
//               width={150}
//               height={50}
//               className="grayscale hover:grayscale-0 transition duration-300"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
