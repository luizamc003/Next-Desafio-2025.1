import { ButtonGradient } from "@/components/buttons";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { createCategory } from "../../../../actions/admin/categories/actions";

export default function Category() {
  return (
    <div className="flex justify-center items-center py-10">
      <form
        action={createCategory}
        autoComplete="off"
        className="flex justify-center items-center flex-col gap-3 bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:w-[50%] rounded-3xl "
      >
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Nova Categoria</span>
          <input
            type="Categoria"
            name="name"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7"
          />
        </div>
        <div className="flex w-full justify-between flex-row items-center md:w-1/2">
          <ButtonGradient buttonText="Criar" />
          <ButtonGradient buttonText="Cancelar" link="/admin/manage/category" />
        </div>
        <Link
          href="/admin/manage/category"
          className="w-full flex flex-row justify-center items-center text-slate-600 font-semibold"
        >
          <ArrowBack />
          <span>Voltar</span>
        </Link>
      </form>
    </div>
  );
}
