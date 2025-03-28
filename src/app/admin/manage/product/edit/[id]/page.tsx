import ProductEdit from "@/components/admin/product-edit";
import { fetchProductById } from "../../../../../../../actions/posts/action";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const product = await fetchProductById(id);
  return <ProductEdit product={product} />;
}
