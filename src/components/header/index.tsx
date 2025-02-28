import SearchHeader from "./search-header";
import Topbar from "./topbar";
import Image from "next/image";

import {
  ShoppingBagOutlined,
  PersonOutlineOutlined,
  Menu,
} from "@mui/icons-material";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center md:flex-row md: md:w-full w-full space-x-4md:px-7 md:max-w-[1440px]">
          <div className="flex w-full justify-between  items-center px-3 md:justify-start border-b-2 border-primary-pink md:border-hidden">
            <div className="md:hidden">
              <Menu />
            </div>
            <Image
              src="/logo/beleza-express-logo.png"
              alt="logo"
              width={200}
              height={100}
            />

            <div className="md:hidden">
              <a href="">
                <ShoppingBagOutlined style={{ fontSize: 35 }} />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center md:justify-center md:flex-grow">
            <SearchHeader />
          </div>

          <div className="md:flex justify-center items-center w-full space-x-4 hidden md:space-x-1">
            <PersonOutlineOutlined style={{ fontSize: 30 }} />
            <div className="flex justify-between items-center md:space-x-10">
              <div className="flex flex-col items-center md:items-start">
                <span>Olá visitante</span>
                <span className="text-sm text-dark-light">
                  Faça o <a href="">login</a> ou <a href="">cadastre-se</a>
                </span>
              </div>
              <div className="flex justify-center items-center ">
                <a href="">
                  <ShoppingBagOutlined style={{ fontSize: 35 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
}
