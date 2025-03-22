import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="w-full bg-gradient-to-tr from-primary-pink to-secondary-pink">
        {children}
      </div>
    </div>
  );
}
