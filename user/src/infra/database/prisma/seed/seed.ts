import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const hashedPassword = bcrypt.hashSync("123456", 10);

async function main() {
  const john = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@mail.com",
      password: hashedPassword,
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
