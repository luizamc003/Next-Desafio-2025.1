"use server";

import prisma from "../../lib/db";

export async function fetchProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  return product;
}
