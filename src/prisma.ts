import type { PrismaClient } from "@prisma/client";

let prismaInstance: PrismaClient | undefined;

async function getPrismaClient(): Promise<PrismaClient> {
  if (prismaInstance) {
    return prismaInstance;
  }
  const { PrismaClient } = await import("@prisma/client");
  prismaInstance = new PrismaClient({
    errorFormat: "pretty",
  });
  return prismaInstance;
}

export default getPrismaClient;
