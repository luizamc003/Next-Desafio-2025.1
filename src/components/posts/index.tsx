import Link from "next/link";
import TopNavegation from "../top-navegation";

export default function Posts() {
  const linksProducts = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/posts" },
  ];

  return (
    <div>
      <TopNavegation links={linksProducts} />
    </div>
  );
}
