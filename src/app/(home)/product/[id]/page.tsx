import ProductPage from "@/components/product-page";
import { fetchProductById } from "../../../../../actions/individualProduct/action";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);

  const product = await fetchProductById(id);
  return <ProductPage product={product} />;
}
