import { useEffect, useState } from "react"
import { Api } from "../services/coinGecoAPI"
import { coinInfo } from "../Types/coin-type"

function useCoinRes () {
    const [coins, setCoins] = useState<Array<coinInfo>>([])

    useEffect(() => {
        Api.getGoins().then(({data}) => {
          setCoins(data)
        })
  }, [])
  return {coins}
}
function useCoin (id?: string) {
  const [loading, setLoadin] = useState(false)
  const [error, setError] = useState(false)
  const [coins, setCoins] = useState<Array<coinInfo>>([])

  const getCoin = async () => {
    try {
      setLoadin(true)
      const res = await Api.getCoin(id)
      setCoins(res)
    } catch (error: any) {
      setError(error)
    } finaly {
      setLoadin(false)
    }
  }

  useEffect(() => {
      if (id) {
        getCoin()
      }
}, [id])

return {coins, loading, error}
}
export {useCoinRes, useCoin}