"use client";
import RedirectHomeAdmin, { ButtonGradient } from "@/components/buttons";
import Link from "next/link";
import { HomeOutlined } from "@mui/icons-material";
import { Product } from "../../../../types/data";
import { useEffect, useState } from "react";
import { fetchCategoryNames } from "../../../../actions/admin/categories/actions";
import { editProduct } from "../../../../actions/posts/action";

export default function ProductEdit({ product }: { product?: Product }) {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: "",
    cash_price: product?.cash_price || "",
    installment_price: product?.installment_price || "",
    installment_count: product?.installment_cout || "",
    description: product?.description || "",
    image: null as File | null,
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form
        action={(formData: FormData) => {
          if (product?.id) {
            editProduct(product.id, formData);
          }
        }}
        className="flex justify-center items-center flex-col gap-3 bg-[#FFFFFF] w-[95%] px-5 py-10 md:w-[90%] lg:w-[75%] rounded-3xl "
      >
        <div className="w-full flex justify-between border-b-2 py-2 border-slate-400 items-center text-slate-700 font-bold text-3xl">
          <span>Editar</span>
          <RedirectHomeAdmin />
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Nome</span>
          <input
            name="name"
            type="text"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Categoria</span>
            <select
              name="category"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
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
              name="cash_price"
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
              value={formData.cash_price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Preço parcelado</span>
            <input
              name="installment_price"
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
              value={formData.installment_price}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col w-full gap-1 justify-start">
            <span className="font-bold text-slate-700">Total de parcelas</span>
            <input
              name="installment_count"
              type="number"
              className="bg-slate-300 rounded-3xl w-full outline-none px-3 h-7 text-dark"
              value={formData.installment_count}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 justify-start">
          <span className="font-bold text-slate-700">Descrição</span>
          <input
            name="description"
            value={formData.description}
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 py-2 text-dark h-24 resize-none"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col w-full gap-1 justify-start md:w-1/5">
          <span className="font-bold text-slate-700">Upload imagem</span>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="bg-slate-300 rounded-3xl w-full outline-none px-3 py-1 text-dark"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex justify-between items-center w-full md:w-1/3">
          <ButtonGradient buttonText="Salvar" />
        </div>
      </form>
    </div>
  );
}
