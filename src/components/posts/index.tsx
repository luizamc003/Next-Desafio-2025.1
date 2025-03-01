import Link from "next/link";
import TopNavegation from "../top-navegation";
import SingleProduct from "../single-product";
import NewsletterSection from "../newsletter-section";

export default function Posts() {
  const linksProducts = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/posts" },
  ];

  return (
    <div>
      <div>
        <TopNavegation links={linksProducts} />
      </div>
      <div className="w-full px-6 md:px-11">
        <h1 className="  text-3xl text-dark font-extrabold">PRODUTOS</h1>
      </div>
      <div className="col-span-full flex justify-center py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
      <NewsletterSection />
    </div>
  );
}
