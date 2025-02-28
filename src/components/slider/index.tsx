"use client";

import dynamic from "next/dynamic";

const ClientSlider = dynamic(() => import("./client-slider"), {
  ssr: false,
});

export default function Slider() {
  return (
    <div>
      <ClientSlider />
    </div>
  );
}
