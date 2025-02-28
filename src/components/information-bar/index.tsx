import Image from "next/image";

export default function InformationBar() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="bg-[#f49cbbd3] text-dark text-sm flex flex-wrap w-11/12 rounded-xl p-2 md:flex-nowrap md:justify-center">
        <div className="flex items-center justify-start  gap-2 p-1 w-1/2 md:justify-center md:w-auto md:px-10 ">
          <Image
            src="/landing-page/make-icon.png"
            width={30}
            height={32.43}
            alt="make-icon"
          />
          <span>Produtos com preços excelentes</span>
        </div>
        <div className="flex items-center justify-start  gap-2 p-1 w-1/2 md:justify-center md:w-auto md:px-10">
          <Image
            src="/landing-page/make-icon-2.png"
            width={30}
            height={32.43}
            alt="make-icon"
          />
          <span>Alta qualidade para o cuidado da pele e do corpo</span>
        </div>
        <div className="flex items-center justify-start  gap-2 p-1 w-1/2 md:justify-center md:w-auto md:px-10">
          <Image
            src="/landing-page/box-price-icon.png"
            width={30}
            height={32.43}
            alt="make-icon"
          />
          <span>Entrega rápida</span>
        </div>
        <div className="flex items-center justify-start  gap-2 p-1 w-1/2 md:justify-center md:w-auto md:px-10">
          <Image
            src="/landing-page/chat-icon.png"
            width={30}
            height={32.43}
            alt="make-icon"
          />
          <span>Atendimento via Whatsapp</span>
        </div>
      </div>
    </div>
  );
}
