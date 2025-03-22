export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id?: number;
  name?: string;
  cash_price?: number;
  installment_price?: number;
  installment_cout?: number;
  image?: string;
  description?: string | null;
  categories?: Category[];
};

export type IndividualProduct = {
  id?: number;
  name?: string;
  cash_price?: number;
  installment_price?: number;
  installment_cout?: number;
  image?: string;
  description?: string | null;
  categories?: Category[];
} | null;
