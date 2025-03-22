import Image from "next/image";
import Link from "next/link";
import {
  DeleteOutlineOutlined,
  ArrowBack,
  AddBoxOutlined,
} from "@mui/icons-material";

export default function CategoryTable() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-center items-center flex-col bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[60%] rounded-3xl ">
        <div className="flex text-slate-700 w-full justify-center items-center">
          <Link
            href={"/admin/manage/category/create-category"}
            className="w-full flex justify-center items-center"
          >
            <AddBoxOutlined className="text-4xl" />
          </Link>
        </div>
        <div className="w-full md:w-[98%] flex justify-center items-center flex-col">
          <div className="w-full flex justify-between items-center py-3 border-b-2 border-secondary-pink">
            <span className="w-1/3 text-center text-dark-light">Tipo</span>
            <span className="w-1/3 text-center text-dark-light">Id</span>
            <span className="w-1/3 text-center text-dark-light">Ações</span>
          </div>
        </div>
        <div className="w-full md:w-[98%] flex justify-center items-center flex-col">
          <div className="w-full flex justify-between items-center py-3 ">
            <span className="w-1/3 text-center text-dark-light">Maquiagem</span>
            <span className="  w-1/3 text-center text-dark-light">1</span>
            <div className="w-1/3 flex flex-row justify-center items-center text-dark-light">
              <button>
                <DeleteOutlineOutlined />
                <span>Deletar</span>
              </button>
            </div>
          </div>
        </div>
        <Link
          href="/admin"
          className="w-full flex  flex-row justify-center items-center text-slate-600 font-semibold"
        >
          <ArrowBack />
          <span>Voltar</span>
        </Link>
      </div>
    </div>
  );
}
