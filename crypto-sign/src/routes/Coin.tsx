import React, { FC } from 'react'
import { coinInfo } from '../Types/coin-type'

const Coin: FC<{coins: coinInfo}> = ({coins}) => {
  return (
    <div>Coin</div>
  )
}

export default Coin