import ProductView from "@/components/admin/product-view";
import { fetchProductById } from "../../../../../../../actions/posts/action";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const product = await fetchProductById(id);
  return <ProductView product={product} />;
}
