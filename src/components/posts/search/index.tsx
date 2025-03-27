"use client";

import { SearchRounded } from "@mui/icons-material";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>(
    searchParams.get("query") || ""
  );

  useEffect(() => {
    setSearchTerm(searchParams.get("query") || "");
  }, [searchParams]);

  const handleSearch = (query: string) => {
    if (!query) {
      return;
    }

    const params = new URLSearchParams();
    params.set("query", query);
    router.push(`/posts/?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center p-2 pb-5"
    >
      <div className="w-[60%] border-2 rounded-3xl overflow-hidden h-9 flex justify-center items-center border-primary-pink bg-slate-50 pr-3">
        <input
          type="text"
          placeholder="Busca"
          className="w-full px-3 border-none outline-none bg-slate-50 text-primary-pink placeholder-primary-pink"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button>
          <SearchRounded className="text-primary-pink text-3xl" />
        </button>
      </div>
    </form>
  );
}
