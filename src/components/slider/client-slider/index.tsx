"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SingleProduct from "@/components/single-product";
import { CSSProperties } from "react";

export default function ClientSlider() {
  const data = [
    { id: 1, product: <SingleProduct /> },
    { id: 2, product: <SingleProduct /> },
    { id: 3, product: <SingleProduct /> },
    { id: 4, product: <SingleProduct /> },
    { id: 5, product: <SingleProduct /> },
  ];

  return (
    <div className="w-[95%] mx-auto lg:w-[85%]">
      <Swiper
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          320: { slidesPerView: 2 },
        }}
        style={
          {
            "--swiper-navigation-size": "30px",
          } as CSSProperties
        }
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            {item.product}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
