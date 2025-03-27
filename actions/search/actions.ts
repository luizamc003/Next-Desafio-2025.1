const itemsPerPage = 24;
import prisma from "@/lib/db";

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * itemsPerPage;

  const products = await prisma.product.findMany({
    where: {
      OR: [{ name: { contains: query, mode: "insensitive" } }],
    },
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
    take: itemsPerPage,
    skip: offset,
  });

  const count = await prisma.product.count({
    where: {
      OR: [{ name: { contains: query, mode: "insensitive" } }],
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage);
  return { products, count, totalPages };
}
