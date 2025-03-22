import Link from "next/link";
import { ManageAccountsOutlined } from "@mui/icons-material";

const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Produtos" },
  { href: "/contact", label: "Contato" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between bg-primary-pink p-1 ">
      <div className="flex justify-between items-center w-full lg:max-w-[1440px] mx-auto px-4">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <span className="text-white text-xl hover:bg-secondary-pink hover:bg-opacity-10 p-3">
              {link.label}
            </span>
          </Link>
        ))}
        <a href="/login">
          <ManageAccountsOutlined
            style={{ color: "whitesmoke", fontSize: 30 }}
          />
        </a>
      </div>
    </div>
  );
}
