import Link from "next/link";
import {
  AddBoxOutlined,
  SellOutlined,
  HomeOutlined,
  CategoryOutlined,
} from "@mui/icons-material";
import AdminTable from "./admin-table";
import { Product } from "@prisma/client";

export default function Admin({
  products,
  count,
}: {
  products: Product[];
  count: number;
}) {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex justify-center items-center flex-col bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:[85%] rounded-3xl ">
        <div className="w-[98%] border-b-2 border-gray flex gap-10 md:flex-row md:justify-between items-center">
          <div className="flex justify-center md:justify-center flex-col items-center gap-4 py-2 md:gap-0 md:py-0 w-full">
            <div className="flex text-slate-700 w-full justify-end items-center">
              <Link
                href={"/admin/manage/category"}
                className="flex justify-end items-center text-end"
              >
                <CategoryOutlined className="text-3xl" />
                <span>Categorias</span>
              </Link>
            </div>
            <div className="flex text-slate-700 w-full justify-center items-center">
              <Link
                href={"/admin/manage/product/create"}
                className="w-full flex justify-center items-center"
              >
                <AddBoxOutlined className="text-4xl" />
              </Link>
            </div>
            <div className="flex justify-center w-full">
              <span className="flex text-slate-700 md:text-3xl md:text-start  justify-center font-bold md:justify-start">
                Gerenciamento
              </span>
              <div className="flex justify-end items-center gap-2 md:justify-end w-full text-end">
                <Link href={"/admin/manage/topbar"}>
                  <SellOutlined className="text-slate-700" />
                </Link>
                <Link
                  href={"/"}
                  className="hidden md:flex md:justify-center md:items-center md:flex-row gap-1"
                >
                  <HomeOutlined className="md:text-4xl text-slate-700" />
                  <span className="text-slate-700">Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AdminTable products={products} count={count} />
      </div>
    </div>
  );
}
