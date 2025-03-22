"use client"; // Define que este componente será renderizado no cliente

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {children}
      {pathname !== "/login" && <Footer />}
    </>
  );
}
