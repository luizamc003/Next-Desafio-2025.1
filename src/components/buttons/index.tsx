import {
  VisibilityOutlined,
  EditOutlined,
  DeleteOutlineOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import Link from "next/link";

interface ButtonGradientProps {
  buttonText: string;
}

interface ButtonGradientCancelProps {
  buttonText: string;
  route: string;
}

export function ButtonGradient({
  buttonText,
  link,
}: ButtonGradientProps & { link?: string }) {
  const content = (
    <div className="flex items-center justify-center py-2 sm:py-3 w-full">
      <button className="bg-primary-pink text-white font-semibold px-8 py-2  md:px-9 md:py-2 sm:py-2 rounded text-base sm:text-base  transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-primary-pink hover:to-secondary-pink hover:scale-105">
        {buttonText}
      </button>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
}

export function ButtonGradientCancel({
  buttonText,
  route,
}: ButtonGradientCancelProps) {
  return (
    <Link href={route}>
      <div className="flex items-center justify-center py-2 sm:py-3 w-full">
        <button className="bg-primary-pink text-white font-semibold px-8 py-2  md:px-9 md:py-2 sm:py-2 rounded text-base sm:text-base  transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-primary-pink hover:to-secondary-pink hover:scale-105">
          {buttonText}
        </button>
      </div>
    </Link>
  );
}

export function EditButton({ id }: { id: number }) {
  return (
    <Link href={`/admin/manage/product/edit/${id}`}>
      <EditOutlined />
    </Link>
  );
}

export function DeleteButton({ id }: { id: number }) {
  return (
    <Link href={`/admin/manage/product/delete/${id}`}>
      <DeleteOutlineOutlined />
    </Link>
  );
}

export function ViewButton({ id }: { id: number }) {
  return (
    <Link href={`/admin/manage/product/view/${id}`}>
      <VisibilityOutlined />
    </Link>
  );
}

export default function RedirectHomeAdmin() {
  return (
    <Link
      href={"/admin"}
      className="md:flex md:justify-center md:items-center text-base md:flex-row gap-1 text-slate-500"
    >
      <HomeOutlined className="md:text-2xl" />
      <span>Home</span>
    </Link>
  );
}
