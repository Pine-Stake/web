import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createPrice = (usdPrice: number) => prisma.price.upsert({
  where: {
    id: 'solana-price'
  },
  create: {
    id: 'solana-price',
    usdPrice
  },
  update: {
    usdPrice
  }
})

export const getPrice = () => prisma.price.findFirst({ where: { id: 'solana-price' } })
