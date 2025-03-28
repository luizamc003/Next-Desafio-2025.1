"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function fetchCategories() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        select: { id: true, name: true },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.category.count();

  return { categories, count };
}

export async function fetchCategoryNames() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return categories;
}

export async function deleteCategory(id: number | undefined) {
  await prisma.category.delete({
    where: { id },
  });
}

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;

  await prisma.category.create({
    data: {
      name,
    },
  });
  redirect("/admin/manage/category");
}

export async function fetchCategoryById(id?: number) {
  const category = prisma.product.findUnique({
    where: { id },
    select: {
      name: true,
    },
  });
  return category;
}
