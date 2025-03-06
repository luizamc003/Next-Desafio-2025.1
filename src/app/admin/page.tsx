import Link from "next/link";
import {
  AddBoxOutlined,
  SellOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import AdminTable from "./admin-table";

export default function Page() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-tr from-primary-pink to-secondary-pink py-10">
      <div className="flex justify-center items-center flex-col bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:[85%] rounded-3xl ">
        <div className="w-[98%] border-b-2 border-gray flex justify-around items-center">
          <span className="flex items-start text-slate-700 text-3xl text-start font-bold ">
            Gerenciamento
          </span>
          <div className="flex justify-center items-center md:px-28 text-slate-700">
            <Link href={"/admin"}>
              <AddBoxOutlined className="text-4xl" />
            </Link>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Link href={"/admin"}>
              <SellOutlined className="text-slate-700" />
            </Link>
            <Link
              href={"/"}
              className="flex justify-center items-center flex-row gap-1"
            >
              <HomeOutlined className="text-4xl text-slate-700" />
              <span className="text-slate-700">Home</span>
            </Link>
          </div>
        </div>
        <AdminTable />
      </div>
    </div>
  );
}
