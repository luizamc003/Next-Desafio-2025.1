import RedirectHomeAdmin, { ButtonGradient } from "@/components/buttons";
import { DeleteForeverOutlined } from "@mui/icons-material";

export default function DeleteProduct() {
  return (
    <div className="flex justify-center items-center py-10">
      <form className="flex justify-center items-center flex-col gap-3 text-slate-700 font-bold bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[50%] rounded-3xl ">
        {" "}
        <div className="w-full flex justify-end">
          <RedirectHomeAdmin />
        </div>
        <span className="text-3xl text-center">
          Deseja excluir esse produto?
        </span>
        <DeleteForeverOutlined className="text-9xl" />
        <div className="flex flex-col md:flex-row md:gap-9 justify-center items-center w-1/3">
          <ButtonGradient buttonText="Excluir" />
          <ButtonGradient buttonText="Cancelar" />
        </div>
      </form>
    </div>
  );
}
