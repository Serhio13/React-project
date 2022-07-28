import { useEffect, useState } from "react"
import { Api } from "../services/coinGecoAPI"
import { coinImage, coinInfo } from "../Types/coin-type"

function useCoinRes () {
    const [coins, setCoins] = useState<Array<coinInfo>>([])

    useEffect(() => {
        Api.getCoins().then(({data}) => {
          setCoins(data)
        })
  }, [])
  return {coins}
}

function useCoin (id?: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [coins, setCoins] = useState<coinImage | null>(null)

  const getCoin = async () => {
    try {
      setLoading(true)
      const {data} = await Api.getCoin(id as string)
      setCoins(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
      if (id) {
        getCoin()
      }
}, [id])

return {coins, loading, error}
}

// function useHistory (id?: string) {
//   const [historicalData, setHistoricalData] = useState<coinImage>();
//   const [days, setDays] = useState(1);
//   const [flag, setFlag] = useState(false);
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)


//   // const fetchHistoricData = async () => {
//   //   const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
//   //   setflag(true);
//   //   setHistoricData(data.prices);
//   // };

//   const getHistory = async () => {
//     try {
//       setLoading(true)
//       const {data} = await Api.getCoin(id as string)
//       setFlag(true)
//       // @ts-ignore
//       setHistoricalData(data.prices)
//     } catch (error: any) {
//       setError(error)
//     } finally {
//       setLoading(false)
//     }
//   }

// }

export {useCoinRes, useCoin}