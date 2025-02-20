import Link from "next/link";

const links = [
  { href: "/home", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
  { href: "/login", label: "Login" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between bg-primaryPink p-4">
      <div className="flex justify-center content-center space-x-4">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <span className="text-white hover:bg-secondary-pink p-2 rounded-xl">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
