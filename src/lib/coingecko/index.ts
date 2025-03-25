import axios from "axios"

export const fetchSolanaPrice = async () => {
  try {
    const {data} = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    )
    return data
  } catch (error) {
    console.log(1000, error)
    return {}
  }
};
