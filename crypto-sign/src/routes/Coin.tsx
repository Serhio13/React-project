import React, { FC } from 'react'
import {useCoinRes} from '../hooks/useCoinRes'
import { coinInfo } from '../Types/coin-type'

const Coin = () => {
  const {id} = useMatches()
  const {coint, loading} = useCoin(id)
  return (
    <div>
      
    </div>
  )
}

export default Coin