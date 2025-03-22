"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SingleProduct from "@/components/single-product";

// Import Swiper styles
import "swiper/css";

import "../style.css";
import { Product } from "../../../../types/data";

type ProductsProps = {
  products: Product[];
};

export default function ClientSlider({ products }: ProductsProps) {
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
          {products.map((productmap, index) => (
            <SwiperSlide key={index}>
              <SingleProduct singleproduct={productmap} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
