import RedirectHomeAdmin, {
  ButtonGradient,
  ButtonGradientCancel,
} from "@/components/buttons";
import { PaidOutlined } from "@mui/icons-material";

export default function TopBarAdmin() {
  return (
    <div className="flex justify-center items-center py-10">
      <form className="flex justify-center items-center flex-col gap-3 text-slate-700 font-bold bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[50%] rounded-3xl ">
        {" "}
        <div className="w-full flex justify-end">
          <RedirectHomeAdmin />
        </div>
        <span className="text-3xl text-center">Promoção (barra superior)</span>
        <PaidOutlined className="text-9xl" />
        <div className="flex flex-col w-full gap-1 justify-start md:px-8">
          <input
            type="text"
            placeholder="Frete grátis para todo sudeste"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-10 text-dark"
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-9 justify-center items-center w-1/3">
          <ButtonGradient buttonText="Criar" />
          <ButtonGradientCancel buttonText="Cancelar" route="/admin" />
        </div>
      </form>
    </div>
  );
}
