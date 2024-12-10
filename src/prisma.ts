import { PrismaClient } from "@prisma/client";
// postgres 연결
const prisma = new PrismaClient({
  errorFormat: "pretty",
});

module.exports = prisma;
