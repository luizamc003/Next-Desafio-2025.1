import { ButtonGradient } from "../buttons";
import TopNavegation from "../top-navegation";
import {
  EmailOutlined,
  Instagram,
  Facebook,
  X,
  WhatsApp,
} from "@mui/icons-material";

export default function Contact() {
  const linksContact = [
    { name: "Home", href: "/" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <div className="min-h-screen">
      <TopNavegation links={linksContact} />
      <h1 className="  text-3xl text-dark font-bold text-center">Contato</h1>
      <div className="flex justify-center items-center py-7">
        <div className="w-[90%] shadow-[0_-5px_6px_rgba(0.5,0.5,0.5,0.2),0_5px_6px_rgba(0.5,0.5,0.5,0.2)] rounded-xl flex justify-center items-start flex-col p-2 gap-3 md:w-[70%] md:px-11">
          <div className="w-full ">
            <span className="text-start text-primary-pink font-bold">Nome</span>
            <div className=" w-full rounded-3xl overflow-hidden h-9 flex justify-center  bg-primary-pink pr-3">
              <input
                type="text"
                className="px-2 w-full border-none outline-none bg-primary-pink text-white font-semibold"
              />{" "}
            </div>
          </div>
          <div className="w-full ">
            <span className="text-start text-primary-pink font-bold">
              Email
            </span>
            <div className=" w-full rounded-3xl overflow-hidden h-9 flex justify-center  bg-primary-pink pr-3">
              <input
                type="text"
                className="px-2 w-full border-none outline-none bg-primary-pink text-white font-semibold"
              />{" "}
            </div>
          </div>
          <div className="w-full ">
            <span className="text-start text-primary-pink font-bold">
              Assunto
            </span>
            <div className=" w-full rounded-3xl overflow-hidden h-9 flex justify-center  bg-primary-pink pr-3">
              <input
                type="text"
                className="px-2 w-full border-none outline-none bg-primary-pink text-white font-semibold"
              />{" "}
            </div>
          </div>
          <div className="w-full ">
            <span className="text-start text-primary-pink font-bold">
              Mensagem
            </span>
            <div className="w-full rounded-3xl overflow-hidden flex justify-center bg-primary-pink pr-3 h-40">
              <textarea className="px-2 w-full border-none outline-none bg-primary-pink text-white font-semibold h-full"></textarea>
            </div>
          </div>
          <ButtonGradient buttonText="Enviar" />
        </div>
      </div>

      <div className="w-full bg-secondary-pink flex justify-center items-center flex-col gap-6 py-6 my-6">
        <span className="text-xl font-semibold text-center">
          Estamos disponíveis em nossas redes!
        </span>
        <div className="flex flex-col md:justify-between md:w-[1440px] md:px-8 text-xl font-semibold justify-center items-center gap-3 lg:flex-row">
          <div className="flex flex-col">
            <div className="flex gap-1">
              <Instagram />
              <span>Instagram</span>
            </div>
            <div className="flex gap-1">
              <Facebook />
              <span>Facebook</span>
            </div>
            <div className="flex gap-1">
              <X />
              <span>Twitter</span>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <WhatsApp />
            <span>(XX)XXX-XXXX</span>
          </div>
          <div className="flex gap-1 items-center">
            <EmailOutlined />
            <span>email@email.com</span>
          </div>
          <p className="lg:text-end flex items-center text-center">
            R. Duque de Caxias, 115 <br /> Poço Rico, Juiz de Fora - MG <br />
            36020-280, Brasil
          </p>
        </div>
      </div>
    </div>
  );
}
