"use client";

import { useParams } from "next/navigation";
import DeleteProduct from "@/components/admin/product-delete";

export default function Page() {
  const { id } = useParams(); // Captura o parâmetro dinâmico "id"

  return <DeleteProduct id={Number(id)} />;
}
