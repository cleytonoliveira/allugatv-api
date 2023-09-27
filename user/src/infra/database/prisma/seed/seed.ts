import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const john = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@mail.com",
      password: "123456",
    },
  });

  console.log({ john });
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
