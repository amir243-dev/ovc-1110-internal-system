import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// 1. Create the adapter using the environment variable
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

// 2. Instantiate the client with the adapter
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 3. Singleton pattern: Reuse the client in development (so hot-reloading doesn't exhaust connections)
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
