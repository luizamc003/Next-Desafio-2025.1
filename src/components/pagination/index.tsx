"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams as any);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = (current: number, total: number) => {
    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1, 2];
    if (current > 3) {
      pages.push("...");
    }

    if (current > 2 && current < total - 1) {
      pages.push(current);
    }

    if (current < total - 2) {
      pages.push("...");
    }

    pages.push(total - 1, total);
    return Array.from(new Set(pages));
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="md:py-4 py-2">
      <div className="w-full flex justify-end h-16 items-center border-y-2 px-10 border-primary-pink py-2">
        <div className="flex flex-row gap-2 h-full items-center">
          {allPages.map((page, index) =>
            typeof page === "number" ? (
              <Link
                key={index}
                href={createPageURL(page)}
                className={`w-[40px] h-[40px] flex justify-center items-center rounded-md ${
                  page === currentPage
                    ? "bg-primary-pink text-white "
                    : "bg-gray-200 text-primary-pink border-2"
                }`}
              >
                {page}
              </Link>
            ) : (
              <span
                key={index}
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                {page}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
