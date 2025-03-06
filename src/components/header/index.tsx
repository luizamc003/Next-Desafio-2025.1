"use client";

import { useState } from "react";
import SearchHeader from "./search-header";
import Topbar from "./topbar";
import Image from "next/image";
import {
  ShoppingBagOutlined,
  PersonOutlineOutlined,
  Menu,
  HomeRounded,
  ShoppingBagRounded,
  Call,
  Login,
} from "@mui/icons-material";
import Navbar from "./navbar";
import Link from "next/link";
import Sidebar from "../sidebar"; // Import the Sidebar component

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Topbar />
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center md:flex-row md: md:w-full w-full space-x-4md:px-7 md:max-w-[1440px]">
          <div className="flex w-full justify-between items-center px-3 md:justify-start border-b-2 border-primary-pink md:border-hidden">
            <div className="md:hidden" onClick={toggleSidebar}>
              <Menu />
            </div>
            <Link href={"/"}>
              <Image
                src="/logo/beleza-express-logo.png"
                alt="logo"
                width={200}
                height={100}
              />
            </Link>

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

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50">
          <Sidebar expanded={isSidebarOpen} setExpanded={setIsSidebarOpen}>
            <ul className="py-3 flex flex-col gap-4 text-xl text-primary-pink ">
              <li className=" flex flex-row gap-3">
                <HomeRounded />
                <Link href={"/"}>Home</Link>
              </li>
              <li className=" flex flex-row gap-3">
                <ShoppingBagRounded />
                <Link href={"/posts"}>Produtos</Link>
              </li>
              <li className=" flex flex-row gap-3">
                <Call />
                <Link href={"/contact"}>Contato</Link>
              </li>
              <li className=" flex flex-row gap-3">
                <Login />
                <Link href={"/login"}>Login</Link>
              </li>
            </ul>
          </Sidebar>
        </div>
      )}
    </div>
  );
}
