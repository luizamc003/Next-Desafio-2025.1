import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const values = [
    {
      title: "Missão",
      description:
        "Empoderar pessoas de todas as identidades e estilos a se expressarem livremente por meio da maquiagem. Oferecemos produtos e conteúdos acessíveis, inovadores e de alta qualidade, promovendo a beleza como uma forma de arte e autoconfiança.",
    },
    {
      title: "Visão",
      description:
        "Ser referência em diversidade e inclusão no mundo da beleza, criando um espaço onde todas as pessoas se sintam representadas, valorizadas e inspiradas a explorar sua autenticidade.",
    },
    {
      title: "Valores",
      description:
        "Inclusão – Beleza para todes: valorizamos todas as cores de pele, gêneros, idades e estilos.\nAutenticidade – Celebramos a individualidade e incentivamos a autoexpressão sem padrões limitantes.\nQualidade – Compromisso com produtos e conteúdos que respeitam a pele, o meio ambiente e os animais.",
    },
  ];

  res.status(200).json(values);
}
