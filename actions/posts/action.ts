"use server";

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
