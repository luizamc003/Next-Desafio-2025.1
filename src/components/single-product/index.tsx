import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../types/data";

type ProductProps = {
  singleproduct: Product;
};

export default function SingleProduct({ singleproduct }: ProductProps) {
  return (
    <Link
      href={`/product/${singleproduct.id}`}
      className="flex justify-center items-center p-1 border-2 border-secondary-pink w-44   sm:w-60 md:p-2 lg:transform lg:hover:scale-105 lg:duration-300"
    >
      <div className="flex justify-center items-center flex-col w-full ">
        <Image
          src={singleproduct.image || "/logo/beleza-express.png"}
          alt="produto individual imagem"
          width={120}
          height={100}
        />
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <span className="font-semibold text-dark text-left text-sm sm:text-base">
            {singleproduct.name}
          </span>
          <span className="font-semibold text-danger text-base sm:text-lg">
            R$ {singleproduct.cash_price?.toFixed(2)}
          </span>
          <span className="text-gray text-xs sm:text-sm">
            ou R${singleproduct.installment_price} em{" "}
            {singleproduct.installment_cout}x de R$
            {(
              (singleproduct.installment_price || 1) /
              (singleproduct.installment_cout || 1)
            ).toFixed(2)}{" "}
            no cartão
          </span>
          <p className="py-2 sm:py-4 text-xs sm:text-sm">
            {(singleproduct.description ?? "").slice(0, 80)}...
          </p>
        </div>
        <div className="flex items-center justify-center py-2 sm:py-3">
          <button className="bg-primary-pink text-white font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded text-xs sm:text-base transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-primary-pink hover:to-secondary-pink hover:scale-105">
            Ver mais
          </button>
        </div>
      </div>
    </Link>
  );
}
