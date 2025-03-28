"use client";
import RedirectHomeAdmin, { ButtonGradient } from "@/components/buttons";
import Link from "next/link";
import { HomeOutlined } from "@mui/icons-material";
import {
  fetchCategories,
  fetchCategoryNames,
} from "../../../../actions/admin/categories/actions";

import { useEffect, useState } from "react";
import { createProduct } from "../../../../actions/posts/action";

export default function ProductCreate() {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  useEffect(() => {
    async function loadCategories() {
      try {
        const fetchedCategories = await fetchCategoryNames();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    loadCategories();
  }, []);

  return (
    <div className="flex justify-center items-center py-10">
      <form
        action={createProduct}
        className="flex justify-center items-center flex-col gap-3 bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:w-[75%] rounded-3xl "
      >
        {" "}
        <div className="w-full flex justify-between border-b-2 py-2 border-slate-400 items-center text-slate-700 font-bold text-3xl">
          <span>Criar</span>
          <RedirectHomeAdmin />
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Nome</span>
          <input
            name="name"
            type="text"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Categoria</span>
            <select
              name="category"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Preço</span>
            <input
              type="number"
              name="cash_price"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Preço parcelado</span>
            <input
              type="number"
              name="installment_price"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Parcelas</span>
            <input
              type="number"
              name="installment_count"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Descrição</span>
          <input
            type="text"
            name="description"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 py-2 text-dark h-24 resize-none"
          />
        </div>
        <div className="flex flex-col w-full gap-1 justify-start md:w-1/5">
          <span className="font-bold text-slate-700">Upload imagem</span>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 py-1 text-dark"
          />
        </div>
        <div className="flex justify-between items-center w-full md:w-1/3">
          <ButtonGradient buttonText="Criar" />
        </div>
      </form>
    </div>
  );
}
