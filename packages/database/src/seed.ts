import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: "ADMIN",
    },
  });

  await prisma.link.createMany({
    data: links,
  });
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
