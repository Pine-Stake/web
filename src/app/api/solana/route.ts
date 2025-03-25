import { createPrice } from "@/lib/db/price"
import { fetchSolanaPrice } from "@/lib/coingecko"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  
  const CRON_SECRET = process.env.CRON_SECRET;

  if (!authHeader || authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ });
  }

  const price = await fetchSolanaPrice()
  if (!price?.solana) return NextResponse.json({})
  
  await createPrice(price.solana.usd * 10)
  return NextResponse.json({price})
}