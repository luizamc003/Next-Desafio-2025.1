import SearchHeader from "./search-header";
import Topbar from "./topbar";
import Image from "next/image";
import {
  ShoppingBagOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import Navbar from "./navbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      {/* TODO: colocar a limitacao de container */}
      <div className="flex justify-between px-7 w-full lg:max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center ">
          <Image
            src="/logo/beleza-express-logo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </div>
        <div className="flex justify-center items-center">
          <SearchHeader />
        </div>
        <div className="flex justify-center items-center space-x-4">
          {/* TODO: tirar o preenchimento */}
          <PersonOutlineOutlined style={{ fontSize: 30 }} />
          <div className="flex justify-center lg:space-x-10">
            <div className="flex flex-col">
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
      <Navbar />
    </div>
  );
}
