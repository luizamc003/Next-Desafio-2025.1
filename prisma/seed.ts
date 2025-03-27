import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criação das categorias
  const categories = [{ name: "Sombra" }, { name: "Base" }, { name: "Blush" }];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  // Criação dos produtos com associação às categorias
  const products = [
    {
      name: "Lipstick",
      description: "A long-lasting matte lipstick.",
      cash_price: 19.99,
      installment_price: 24.99,
      installment_cout: 2,
      image:
        "https://epocacosmeticos.vteximg.com.br/arquivos/ids/742418/batom-mac-macximal-silky-matte-lipstick--1-.jpg?v=638739589705700000fou",
      categories: {
        connect: [{ name: "Sombra" }], // Associa à categoria "Sombra"
      },
    },
    {
      name: "Foundation",
      description: "A lightweight foundation for all-day wear.",
      cash_price: 39.99,
      installment_price: 44.99,
      installment_cout: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYEWiTT9u4IbKWixnvH7Qjg5t-6WX_-u4wg&s",
      categories: {
        connect: [{ name: "Base" }], // Associa à categoria "Base"
      },
    },
    {
      name: "Blush Palette",
      description: "A palette with multiple blush shades.",
      cash_price: 29.99,
      installment_price: 34.99,
      installment_cout: 2,
      image:
        "https://dynamic.cdnlive.com.br/700x700/uploads/724/produto/17385867528607_zoom/jpg/dual-cheeks-blush-compacto-nectarscarlet-hbm03-3-ruby-rose.jpg",
      categories: {
        connect: [{ name: "Blush" }], // Associa à categoria "Blush"
      },
    },
    {
      name: "Mascara",
      description: "Nice mascara for all day price is cool buy now",
      cash_price: 39.99,
      installment_price: 44.99,
      installment_cout: 3,
      image: "https://m.media-amazon.com/images/I/71o1Q0jxUbL.jpg",
      categories: {
        connect: [{ name: "Base" }], // Associa à categoria "Base"
      },
    },
    {
      name: "Eyeshadow Palette",
      description: "A vibrant eyeshadow palette with multiple colors.",
      cash_price: 49.99,
      installment_price: 54.99,
      installment_cout: 4,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ85nOgphmk1q27lXHTmncXTwMY8f58ujiiW0EJ1Yszzx7UZJKFNGa4SCiQnmNXNRIafN38iyseReGAV6DfEY23U2FaJ-9_RSbgyqADYKwgKqHuqJtNZGVMqQ&usqp=CAE",
      categories: {
        connect: [{ name: "Sombra" }], // Associa à categoria "Sombra"
      },
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
