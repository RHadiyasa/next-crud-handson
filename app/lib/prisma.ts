import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

// Kalau pada proses development maka kita akan gunakan global variable yang di deklarasikan sebelumnya
// dalam mode production, kita menggunakan instance prisma yang kita buat sebelumnya
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export default prisma;