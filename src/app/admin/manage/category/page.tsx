import CategoryTable from "@/components/admin/category-table";
import { fetchCategories } from "../../../../../actions/admin/categories/actions";

export default async function Page() {
  const { categories, count } = await fetchCategories();
  return <CategoryTable categories={categories} />;
}
