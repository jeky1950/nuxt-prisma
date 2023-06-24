import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

prisma.user.create({
    data: {
        email: 'example@email.com',
        name: 'John Doe',
        posts: {
            create: [
                {
                    title: 'Prisma Examples',
                    content: 'Content',
                    published: true
                }
            ]
        }
    }
})