import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex justify-center w-full relative">
      <Image
        src="/landing-page/makeup-banner.png"
        alt="logo"
        layout="responsive"
        width={400}
        height={200}
        style={{ filter: " blur(1.5px)" }}
      />
      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-dark text-center text-xl font-extrabold  md:text-5xl lg:bottom-20">
        Encontre os melhores produtos aqui!
      </span>
    </div>
  );
}
