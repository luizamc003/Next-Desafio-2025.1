import RedirectHomeAdmin, {
  ButtonGradient,
  ButtonGradientCancel,
} from "@/components/buttons";
import Link from "next/link";
import { HomeOutlined } from "@mui/icons-material";
import Image from "next/image";

export default function ProductView() {
  return (
    <div className="flex justify-center items-center py-10">
      <form className="flex justify-center items-center flex-col gap-3 bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:w-[75%] rounded-3xl ">
        {" "}
        <div className="w-full flex justify-between border-b-2 py-2 border-slate-400 items-center text-slate-700 font-bold text-3xl">
          <span>Criar</span>
          <RedirectHomeAdmin />
        </div>
        <div className="flex justify-center items-center w-full">
          <Image
            src={"/single-product/example-product.png"}
            alt="produto"
            height={200}
            width={240}
          />
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Nome</span>
          <input
            type="text"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Tipo</span>
            <input
              type="text"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Preço</span>
            <input
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Preço parcelado</span>
            <input
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Total de parcelas</span>
            <input
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Descrição</span>
          <textarea className="bg-slate-300 rounded-3xl w-full outline-none px-3 py-2 text-dark h-24 resize-none" />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/4">
          <ButtonGradientCancel buttonText="Fechar" route="/admin" />
        </div>
      </form>
    </div>
  );
}
