import getSliderProducts from "../../../actions/home/action";
import { IndividualProduct } from "../../../types/data";
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

export default async function ProductPage({
  product,
}: {
  product: IndividualProduct;
}) {
  const productSlider = await getSliderProducts();

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" flex justify-center items-center flex-col w-[93%] lg:w-[80%] ">
        <div className="w-full flex justify-start">
          <TopNavegation links={linksNav} />
        </div>
        <div className="w-full md:border-2 md:p-4 md:border-primary-pink flex flex-col md:flex-row">
          <div className="flex justify-center items-center md:w-1/2">
            <Image
              src={product?.image || "/logo/beleza-express.png"}
              alt="produto"
              height={300}
              width={300}
            />
          </div>
          <div className="md:w-1/2">
            <div className="w-full flex justify-start items-start flex-col gap-6">
              <span className="text-dark font-bold text-xl">
                {product?.name}
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-dark font-bold text-lg">
                    {product?.cash_price}
                  </span>
                  <span>à vista</span>
                </div>
                <span className="text-slate-500 text-sm">
                  ou em {product?.installment_cout}x de R${" "}
                  {(
                    (product?.installment_price || 1) /
                    (product?.installment_cout || 1)
                  ).toFixed(2)}{" "}
                  no cartão
                </span>
              </div>
            </div>
            <div className="py-5">
              <ButtonGradient buttonText="ADICIONAR AO CARRINHO" />
            </div>
            <div className="flex flex-col text-slate-700 py-6">
              <span className="font-bold text-lg">Descrição</span>
              <span>{product?.description}</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <TitleSlider title="VOCÊ PODE GOSTAR" />
          <Slider products={productSlider} />
        </div>
      </div>
    </div>
  );
}
