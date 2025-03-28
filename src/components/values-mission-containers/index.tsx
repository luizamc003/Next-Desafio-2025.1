"use client";

import { useEffect, useState } from "react";

interface Value {
  title: string;
  description: string;
}

export default function ValuesContainer() {
  const [values, setValues] = useState<Value[]>([]);

  useEffect(() => {
    async function fetchValues() {
      try {
        const response = await fetch("/api/values");
        const data = await response.json();
        setValues(data);
      } catch (error) {
        console.error("Erro ao buscar os valores:", error);
      }
    }

    fetchValues();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-10 md:gap-40 md:flex-row pb-4">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col justify-center bg-[#f49cbb63] p-4 rounded-[50px] gap-4 shadow-lg w-80 h-80"
        >
          <span className="text-2xl mb-2 text-center">{value.title}</span>
          <span className="text-center">{value.description}</span>
        </div>
      ))}
    </div>
  );
}
