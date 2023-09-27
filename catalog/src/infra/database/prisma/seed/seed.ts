import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const tv32 = await prisma.product.create({
    data: {
      name: "TV HD 32 Polegadas",
      image: "https://i.zst.com.br/thumbs/1/2/30/-729660923.jpg",
      price: 179.88,
      description:
        "Esta TV HD de 32 polegadas é perfeita para espaços menores. Com uma qualidade de imagem nítida e som de alta qualidade, ela é ideal para assistir seus programas favoritos.",
    },
  });

  const tv55 = await prisma.product.create({
    data: {
      name: "Smart TV LED 55 Polegadas",
      image: "https://i.zst.com.br/thumbs/12/0/38/-745624880.jpg",
      price: 479.88,
      description:
        "Esta Smart TV LED de 55 polegadas oferece uma experiência de visualização incrível com resolução 4K e recursos inteligentes, como streaming de vídeo, integração com assistentes de voz e muito mais.",
    },
  });

  const tv65 = await prisma.product.create({
    data: {
      name: "TV OLED 65 Polegadas",
      image: "https://i.zst.com.br/thumbs/12/14/33/-986146107.jpg",
      price: 779.88,
      description:
        "A TV OLED de 65 polegadas proporciona cores vivas e pretos profundos. Com uma tela fina e design elegante, esta TV oferece uma experiência de cinema em casa incomparável.",
    },
  });

  console.log({ tv32, tv55, tv65 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
