import React, { FC } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import {useCoin, useCoinRes} from '../hooks/useCoinRes'
import { coinInfo } from '../Types/coin-type'

const Coin = () => {
  const {coinId} = useParams()
  console.log(coinId)
  const {coins, loading} = useCoin(coinId)
  console.log(coins)
  return (
    <div>
      {loading && "loading"}
      {coins && (
        <span>{coins.name}</span>
      )}
    </div>
  )
}

export default Coin