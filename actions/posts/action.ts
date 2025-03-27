"use server";

import { redirect } from "next/navigation";

import prisma from "@/lib/db";

// model Product {
//     id          Int       @id @default(autoincrement())
//     name        String
//     description String?
//     cash_price       Float
//     installment_price Float
//     installment_cout Int
//     image String
//     categories Category[]
//   }

export default async function getAllProducts() {
  const products = await prisma.product.findMany();
  return products;
}

export async function fetchProducts() {
  const products = await prisma.product.findMany({
    include: {
      categories: {
        select: { id: true, name: true },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.product.count();

  return { products, count };
}

export async function deleteProduct(id: number | undefined) {
  await prisma.product.delete({
    where: { id },
  });
  redirect("/admin");
}

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string | null;
  const cash_price = parseFloat(formData.get("cash_price") as string);
  const installment_price = parseFloat(
    formData.get("installment_price") as string
  );
  const installment_count = parseInt(
    formData.get("installment_count") as string,
    10
  );
  const image = formData.get("image") as string;

  await prisma.product.create({
    data: {
      name,
      description,
      cash_price,
      installment_price,
      installment_cout: installment_count,
      image,
    },
  });
  redirect("/admin/manage/product");
}
