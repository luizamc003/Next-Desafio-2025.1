import Image from "next/image";
import Link from "next/link";
import {
  VisibilityOutlined,
  EditOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";
import { DeleteButton, EditButton, ViewButton } from "@/components/buttons";
import { Product } from "@prisma/client";

export default function AdminTable({
  products,
  count,
}: {
  products: Product[];
  count: number;
}) {
  return (
    <div className="w-full md:w-[98%] flex justify-center items-center flex-col">
      <div className="w-full flex justify-between items-center py-3">
        <span className="hidden md:block md:w-[14%] md:text-center md:text-dark-light">
          Imagem
        </span>
        <span className="w-[37%] md:w-[14%] text-center text-dark-light">
          Produto
        </span>
        <span className="hidden md:block md:w-[14%] md:text-center md:text-dark-light">
          Tipo
        </span>
        <span className="hidden md:block md:w-[12%] md:text-center md:text-dark-light">
          Id
        </span>
        <span className="hidden md:block md:w-[14%] md:text-center md:text-dark-light">
          Descrição
        </span>
        <span className="w-[34%] md:w-[10%] text-center text-dark-light">
          Preço
        </span>
        <span className="w-[28%] md:w-[12%] text-center text-dark-light">
          Ações
        </span>
      </div>
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full flex justify-between items-center py-3"
        >
          <div className="hidden md:block md:w-[14%] w-full">
            <div className="flex justify-center items-center">
              <Image src={product.image} alt="produto" height={50} width={60} />
            </div>
          </div>
          <span className="w-[37%] md:w-[14%] text-center text-dark-light">
            {product.name}
          </span>
          <span className="hidden md:block md:w-[14%] md:text-center text-dark-light">
            Maquiagem
          </span>
          <span className="hidden md:block md:w-[12%] md:text-center text-dark-light">
            {product.id}
          </span>
          <span className="hidden md:block md:w-[14%] md:text-center text-dark-light">
            {product.description && product.description.length > 50
              ? `${product.description.slice(0, 70)}...`
              : product.description || ""}
          </span>
          <span className="w-[34%] md:w-[10%] text-center text-dark-light flex flex-col justify-center items-center">
            <span>{product.cash_price}</span>
            <span>{product.installment_price}</span>
          </span>
          <span className="w-[28%] md:w-[12%] text-center text-dark-light flex justify-between">
            <ViewButton id={product.id} />
            <EditButton id={product.id} />
            <DeleteButton id={product.id} />
          </span>
        </div>
      ))}
    </div>
  );
}
