import Image from "next/image";

export default function SingleProduct() {
  return (
    <div className="flex justify-center items-center p-1 border-2 border-secondary-pink w-40 sm:w-60 md:p-2">
      <div className="flex justify-center items-center flex-col w-full ">
        <Image
          src="/single-product/example-product.png"
          alt="produto individual imagem"
          width={120}
          height={90}
        />
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <span className="font-semibold text-dark text-left text-sm sm:text-base">
            Batom Cremoso Vermelho Paetê 3g
          </span>
          <span className="font-semibold text-danger text-base sm:text-lg">
            R$ 39.90
          </span>
          <span className="text-gray text-xs sm:text-sm">
            ou R$411.95 em 6x de R$68.65 no cartão
          </span>
          <p className="py-2 sm:py-4 text-xs sm:text-sm">
            Glam Paetê traz o Batom Cremoso Vermelho com uma tecnologia
            exclusiva que entrega brilho único para seus lábios.
          </p>
        </div>
        <div className="flex items-center justify-center py-2 sm:py-3">
          <button className="bg-primary-pink text-white font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded text-xs sm:text-base transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-primary-pink hover:to-secondary-pink hover:scale-105">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}
