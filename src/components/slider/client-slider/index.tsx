"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SingleProduct from "@/components/single-product";
import { CSSProperties } from "react";

// Import Swiper styles
import "swiper/css";

import "../style.css";

export default function ClientSlider() {
  const data = [
    { id: 1, product: <SingleProduct /> },
    { id: 2, product: <SingleProduct /> },
    { id: 3, product: <SingleProduct /> },
    { id: 4, product: <SingleProduct /> },
    { id: 5, product: <SingleProduct /> },
  ];

  return (
    <div className="w-full flex justify-center h-fit">
      <div className="w-full lg:w-[90%] flex justify-center items-center lg:h-[500px]">
        <Swiper
          className="customSwiper"
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            1260: { slidesPerView: 4 },
            760: { slidesPerView: 3 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>{item.product}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
