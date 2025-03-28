import HeroSection from "@/components/hero-section";
import InformationBar from "@/components/information-bar";
import Newsletter from "@/components/newsletter-section";
import SingleProduct from "@/components/single-product";
import Slider from "@/components/slider";
import ValuesContainer from "@/components/values-mission-containers";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import TitleSlider from "@/components/slider/title-slider";
import Image from "next/image";
import getSliderProducts from "../../../actions/home/action";

register();

export default async function Home() {
  const product = await getSliderProducts();
  return (
    <div>
      <HeroSection /> <InformationBar />{" "}
      <div className="flex justify-center flex-col my-8">
        <span className="font-semibold text-2xl px-4 flex justify-center iemns-center">
          NOSSOS PRODUTOS
        </span>
        <Slider products={product} />
        <TitleSlider title="MAQUIAGENS PARA VOCÊ" />
        <div className="w-full">
          <Slider products={product} />
        </div>
        <div className="w-full flex justify-center items-center pb-4">
          <span className="font-semibold md:text-3xl text-2xl">
            Nossa essência
          </span>
        </div>
        <ValuesContainer />
        <div className="hidden md:flex justify-between items-center px-24 py-10">
          <Image
            src="/landing-page/make-img3.png"
            alt="Modelo 1"
            width={379}
            height={238}
          />
          <Image
            src="/landing-page/make-img2.png"
            alt="Modelo 1"
            width={379}
            height={238}
          />
          <Image
            src="/landing-page/make-img1.png"
            alt="Modelo 1"
            width={379}
            height={238}
          />
        </div>
        <TitleSlider title="VOCÊ PODE GOSTAR" />
        <div className="w-full">
          <Slider products={product} />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
