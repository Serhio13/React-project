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

export default useCoinRes