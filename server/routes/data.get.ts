import { PrismaClient } from "@prisma/client"

export default defineEventHandler(async (event) => {
    const prisma = new PrismaClient();
    const user = await prisma.user.findMany();
    return user;
})