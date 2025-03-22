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

export default async function getSliderProducts() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      cash_price: true,
      installment_price: true,
      installment_cout: true,
      image: true,
      description: true,
    },
  });
  return products;
}
