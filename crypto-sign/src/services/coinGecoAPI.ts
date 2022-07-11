import axios from 'axios';
import {useState, useEffect} from 'react';
import coinInfo from '../Types/coin-type';

function useCoin() {
  useEffect(() => {
    getCoins();
  },[])


  function getCoins () {
    const [coins, setCoins] = useState<Array<coinInfo>>([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url)
        .then(res => {
        setCoins(res.data)
        console.log(res.data[0]);
        })
        .catch(error => console.log(error));
  }, [])
  return coins
  console.log(coins)
}
}
export default useCoin

// function getCoins () {
//     const [coins, setCoins] = useState<Array<coinInfo>>([])

//     const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

//     useEffect(() => {
//         axios.get(url)
//         .then(res => {
//         setCoins(res.data)
//         console.log(res.data[0]);
//         })
//         .catch(error => console.log(error));
//   }, [])
//   return {coins}
//   console.log(coins)
// }
// export default getCoins;