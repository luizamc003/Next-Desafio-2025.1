import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { ManageAccountsOutlined } from "@mui/icons-material";

const SidebarContext = createContext({ expanded: false });
import Image from "next/image";
import Link from "next/link";

import { ReactNode } from "react";

export default function Sidebar({
  children,
  expanded,
  setExpanded,
}: {
  children: ReactNode;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <div
      className={`h-screen ${
        expanded ? "w-[50%]" : "w-0"
      } transition-all duration-300`}
    >
      <nav className="h-full flex flex-col bg-[#FFFFFF] border-r shadow-sm border-primary-pink">
        <div className="p-4 pb-2 flex justify-between items-center border-b-2 border-primary-pink">
          <Image
            src={"/logo/beleza-express-logo.png"}
            alt="logo"
            height={100}
            width={200}
            className={`${
              expanded ? "block" : "hidden"
            } transition-opacity duration-300`}
          />
          <button
            className="text-white bg-primary-pink rounded-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded && <ChevronFirst size={30} />}
          </button>
        </div>

        {expanded && (
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        )}

        {expanded && (
          <div className="border-t border-primary-pink flex justify-between p-3 text-primary-pink">
            <div className="leading-4">
              <span className="text-xs text-gray-600">Beleza Express</span>
            </div>
            <Link href={"/admin"}>
              <ManageAccountsOutlined />
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
