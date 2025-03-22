"use client";

import dynamic from "next/dynamic";

const ClientSlider = dynamic(() => import("./client-slider"), {
  ssr: false,
});

import { Product } from "../../../types/data";

type SliderProductsProps = {
  products: Product[];
};

export default function Slider({ products }: SliderProductsProps) {
  return (
    <div className="py-8 ">
      <ClientSlider products={products} />
    </div>
  );
}
