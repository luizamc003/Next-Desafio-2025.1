import Image from "next/image";
import Link from "next/link";
import {
  VisibilityOutlined,
  EditOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";

export default function AdminTable() {
  return (
    <div className="w-[98%] flex justify-center items-center flex-col">
      <div className="w-full flex justify-between items-center py-3">
        <span className="w-[14%] text-center text-dark-light">Imagem</span>
        <span className="w-[14%] text-center text-dark-light">Produto</span>
        <span className="w-[14%] text-center text-dark-light">Tipo</span>
        <span className="w-[12%] text-center text-dark-light">Id</span>
        <span className="w-[14%] text-center text-dark-light">Descrição</span>
        <span className="w-[10%] text-center text-dark-light">Preço</span>
        <span className="w-[12%] text-center text-dark-light">Ações</span>
      </div>
      <div className="w-full flex justify-between items-center flex-row">
        <div className="w-[14%] flex justify-center items-center">
          <Image
            src={"/single-product/example-product.png"}
            alt="produto"
            height={50}
            width={60}
          />
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom Cremoso Vermelho Paetê 3g
          </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">Maquiagem </span>
        </div>
        <div className="w-[12%] flex justify-center items-center">
          <span className="text-center text-dark-light">1837748 </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom da cor vermelha feminino marca dior{" "}
          </span>
        </div>
        <div className="w-[10%] flex justify-center items-center flex-col">
          <span className="text-center text-dark-light">3300,00 </span>
          <span className="text-center text-dark-light">4100,00 </span>
        </div>
        <div className="w-[12%] flex justify-between items-center flex-row text-dark-light">
          <Link href={"/admin"}>
            <VisibilityOutlined />
          </Link>
          <Link href={"/admin"}>
            <EditOutlined />
          </Link>
          <Link href={"/admin"}>
            <DeleteOutlineOutlined />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between items-center flex-row">
        <div className="w-[14%] flex justify-center items-center">
          <Image
            src={"/single-product/example-product.png"}
            alt="produto"
            height={50}
            width={60}
          />
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom Cremoso Vermelho Paetê 3g
          </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">Maquiagem </span>
        </div>
        <div className="w-[12%] flex justify-center items-center">
          <span className="text-center text-dark-light">1837748 </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom da cor vermelha feminino marca dior{" "}
          </span>
        </div>
        <div className="w-[10%] flex justify-center items-center flex-col">
          <span className="text-center text-dark-light">3300,00 </span>
          <span className="text-center text-dark-light">4100,00 </span>
        </div>
        <div className="w-[12%] flex justify-between items-center flex-row text-dark-light">
          <Link href={"/admin"}>
            <VisibilityOutlined />
          </Link>
          <Link href={"/admin"}>
            <EditOutlined />
          </Link>
          <Link href={"/admin"}>
            <DeleteOutlineOutlined />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-between items-center flex-row">
        <div className="w-[14%] flex justify-center items-center">
          <Image
            src={"/single-product/example-product.png"}
            alt="produto"
            height={50}
            width={60}
          />
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom Cremoso Vermelho Paetê 3g
          </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">Maquiagem </span>
        </div>
        <div className="w-[12%] flex justify-center items-center">
          <span className="text-center text-dark-light">1837748 </span>
        </div>
        <div className="w-[14%] flex justify-center items-center">
          <span className="text-center text-dark-light">
            Batom da cor vermelha feminino marca dior{" "}
          </span>
        </div>
        <div className="w-[10%] flex justify-center items-center flex-col">
          <span className="text-center text-dark-light">3300,00 </span>
          <span className="text-center text-dark-light">4100,00 </span>
        </div>
        <div className="w-[12%] flex justify-between items-center flex-row text-dark-light">
          <Link href={"/admin"}>
            <VisibilityOutlined />
          </Link>
          <Link href={"/admin"}>
            <EditOutlined />
          </Link>
          <Link href={"/admin"}>
            <DeleteOutlineOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
}
