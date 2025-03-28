import Image from "next/image";
import Link from "next/link";
import { HomeOutlined } from "@mui/icons-material";

export default function Login() {
  return (
    <div className="pb-48 flex justify-center items-center bg-gradient-to-tr from-primary-pink to-secondary-pink py-10">
      <div className="flex justify-center items-center flex-col bg-[#FFFFFF] w-[75%] px-5 py-10 rounded-3xl md:w-[45%]">
        <Image
          src="/logo/beleza-express-logo.png"
          alt="logo"
          height={135}
          width={246}
          className="p-4"
        />
        <div className="w-full flex flex-col gap-3 lg:px-24 md:px-12">
          <div className="flex justify-start items-center border-2 border-primary-pink rounded h-10">
            <input
              type="text"
              placeholder="Email *"
              className=" text-sm w-full px-3 outline-none border-none text-gray"
            />
          </div>
          <div className="flex justify-start items-center w-full border-2 border-primary-pink rounded h-10">
            <input
              type="text"
              placeholder="Nome *"
              className=" text-sm w-full px-3 outline-none border-none text-gray"
            />
          </div>
          <div className="flex justify-start items-center w-full border-2 border-primary-pink rounded h-10">
            <input
              type="password"
              placeholder="Senha *"
              className=" text-sm w-full px-3 outline-none border-none text-gray"
            />
          </div>
          <div className="flex items-center justify-center py-1 sm:py-3 w-full">
            <Link
              href={"/admin"}
              className="bg-[#DD2D4A] text-white font-semibold px-9 py-2  md:px-9 md:py-2 sm:py-2 rounded text-base sm:text-base  "
            >
              Login
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <span>ou</span>
            <span className="mx-1"></span>
            <Link href={"/login"} className="text-primary-pink underline">
              cadastre-se
            </Link>
          </div>
          <Link
            href={"/"}
            className="flex justify-center items-center flex-row gap-1 opacity-40"
          >
            <HomeOutlined className="text-3xl" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
