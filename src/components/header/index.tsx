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
        <div className="flex flex-col items-center lg:flex-row lg: lg:w-full w-full space-x-4lg:px-7 lg:max-w-[1440px]">
          <div className="flex w-full justify-between  items-center px-3 lg:justify-start border-b-2 border-primary-pink lg:border-hidden">
            <div className="lg:hidden">
              <Menu />
            </div>
            <Image
              src="/logo/beleza-express-logo.png"
              alt="logo"
              width={200}
              height={100}
            />

            <div className="lg:hidden">
              <a href="">
                <ShoppingBagOutlined style={{ fontSize: 35 }} />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center lg:justify-center lg:flex-grow">
            <SearchHeader />
          </div>

          <div className="lg:flex justify-center items-center w-full space-x-4 hidden">
            <PersonOutlineOutlined style={{ fontSize: 30 }} />
            <div className="flex justify-between items-center lg:items-end lg:space-x-10">
              <div className="flex flex-col items-center lg:items-start">
                <span>Olá visitante</span>
                <span className="text-sm text-dark-light">
                  Faça o <a href="">login</a> ou <a href="">cadastra-se</a>
                </span>
              </div>
              <div className="flex justify-center items-center">
                <a href="">
                  <ShoppingBagOutlined style={{ fontSize: 35 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
}
