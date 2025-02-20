import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col w-full lg:justify-center border-t-4 items-center border-secondary-pink  text-gray text-base text-center lg:text-start">
      <div className="flex justify-between items-start w-full lg:max-w-[1440px] px-3 lg:px-8 xl:px-16 py-1 ">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between py-5 m-auto lg:gap-10">
          <div className="flex w-full flex-col pb-10 lg:pb-0 flex-1">
            <h1 className="font-semibold pb-4 text-dark">SOCIAL</h1>
            <div className="flex flex-col gap-2">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
            </div>
            <div className="flex w-full flex-col items-center lg:items-start pb-5 lg:pb-0">
              <h1 className="font-semibold pb-4 mt-4 text-dark">
                FORMAS DE PAGAMENTO
              </h1>
              <Image
                src="https://lowell.fbitsstatic.net/sf/img/footer/pagamento-2.svg?theme=main&v=202502171649"
                alt="pagamento"
                loading="lazy"
                width={202}
                height={56}
                className="w-[202px]"
              />
            </div>
          </div>

          <div className="flex justify-center items-center ">
            <Image
              src="/logo/beleza-express-logo.png"
              alt="logo"
              width={400}
              height={200}
            />
          </div>

          <div className="flex w-full flex-col pb-10 lg:pb-0 flex-1 lg:text-end">
            <div className="flex lg:items-end flex-col">
              <h1 className="font-semibold pb-4 text-dark">
                ATENDIMENTO AO CLIENTE
              </h1>
              <div className="flex flex-col flex-end gap-2 mb-4">
                <p>email@hotmail.com</p>
                <p>(32) 9150-1320</p>
                <p>Fale Conosco</p>
                <p>
                  R. Duque de Caxias, 115 <br /> Poço Rico, Juiz de Fora - MG{" "}
                  <br />
                  36020-280, Brasil
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 pb-5 lg:pb-0 lg:border-none md:justify-center ">
                <p className="font-semibold text-dark">SEGURANÇA</p>
                <div className="flex gap-2 lg:gap-5 items-center justify-center md:justify-end">
                  <Image
                    src="/footer/google_site_seguro.png"
                    alt="google"
                    width={357}
                    height={141}
                    className="h-[56px] w-auto"
                  />
                  <Image
                    src="/footer/selo_ssl.png"
                    alt="seguranca"
                    width={82}
                    height={36}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center items-center lg:flex-row py-1 bg-secondary-pink">
          <p className="text-center order-3 lg:order-1 text-danger w-full">
            © Beleza Express - Todos direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
