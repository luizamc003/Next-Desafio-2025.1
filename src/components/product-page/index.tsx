import { ButtonGradient } from "../buttons";
import Slider from "../slider";
import TitleSlider from "../slider/title-slider";
import TopNavegation from "../top-navegation";
import Image from "next/image";

// colcoar o link do produto
const linksNav = [
  { name: "Home", href: "/" },
  { name: "Produtos", href: "/posts" },
  { name: "Individual", href: "/product" },
];

export default function ProductPage() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col w-[93%] lg:w-[80%] ">
        <div className="w-full flex justify-start">
          <TopNavegation links={linksNav} />
        </div>
        <div className="w-full md:border-2 md:p-4 md:border-primary-pink flex flex-col md:flex-row">
          <div className="flex justify-center items-center md:w-1/2">
            <Image
              src={"/single-product/example-product.png"}
              alt="produto"
              height={300}
              width={300}
            />
          </div>
          <div className="md:w-1/2">
            <div className="w-full flex justify-start items-start flex-col gap-6">
              <span className="text-dark font-bold text-xl">
                Batom Cremoso Vermelho Paetê 3g
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-dark font-bold text-lg">
                    R$ 3330,00
                  </span>
                  <span>à vista</span>
                </div>
                <span className="text-slate-500 text-sm">
                  ou em 10x de R$ 350,00 no cartão
                </span>
              </div>
            </div>
            <div className="py-5">
              <ButtonGradient buttonText="ADICIONAR AO CARRINHO" />
            </div>
            <div className="flex flex-col text-slate-700 py-6">
              <span className="font-bold text-lg">Descrição</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ullamcorper vestibulum neque et rutrum. Vivamus velit
                enim, lacinia in venenatis nec, rutrum ac ipsum. Donec mollis
                tempor porta. Suspendisse pellentesque sem nec velit molestie
                molestie. Proin a justo at quam eleifend faucibus. Fusce in
                lobortis quam, vel rutrum mauris
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <TitleSlider title="VOCÊ PODE GOSTAR" />
          <Slider />
        </div>
      </div>
    </div>
  );
}
