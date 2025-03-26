import { getPrice } from "@/lib/db/price"
import { NativeStaking } from "./NativeStaking"

export async function Wrapper() {
  const price = await getPrice()
  return (
    <NativeStaking price={(price?.usdPrice ?? 0) / 10} />
  )
}