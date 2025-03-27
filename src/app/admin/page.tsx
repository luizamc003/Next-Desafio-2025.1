import Admin from "@/components/admin-home";
import { fetchProducts } from "../../../actions/posts/action";

export default async function Page() {
  const { products, count } = await fetchProducts();
  return <Admin products={products} count={count} />;
}
