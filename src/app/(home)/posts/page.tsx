import Posts from "@/components/posts";
import getAllProducts from "../../../../actions/posts/action";
import { fetchFilteredProducts } from "../../../../actions/search/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { products, count, totalPages } = await fetchFilteredProducts(
    query,
    currentPage
  );

  return (
    <div>
      <Posts products={products} count={count} totalPages={totalPages} />
    </div>
  );
}
