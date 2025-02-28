import HeroSection from "@/components/hero-section";
import InformationBar from "@/components/information-bar";
import Newsletter from "@/components/newsletter-section";
import SingleProduct from "@/components/single-product";
import Slider from "@/components/slider";
import ValuesContainer from "@/components/values-mission-containers";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import TitleSlider from "@/components/slider/title-slider";

register();

export default function Home() {
  return (
    <div>
      <HeroSection /> <InformationBar />{" "}
      <div className="flex justify-center flex-col my-8">
        <TitleSlider title="TITULO" />
        <Slider />
        <div className="w-full flex justify-center items-center pb-4">
          <span className="font-semibold md:text-3xl text-2xl">
            Nossa essência
          </span>
        </div>
        <ValuesContainer />
      </div>
      <Newsletter />
    </div>
  );
}
