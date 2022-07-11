import React, { FC, useState } from 'react'
import useCoinRes from '../hooks/useCoinRes'
import { coinInfo } from '../Types/coin-type';
import Coins from './Coins'


const CoinItem: FC<{coins: coinInfo}> = ({coins}) => {
  // const {coins} = useCoinRes()
  console.log(coins);
  
  return (
  
    <div className='coin-row'>
        <p>{coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={coins.image} alt={coins.name}></img>
            <p>{coins.symbol}</p>
        </div>  
    <p>{coins.current_price}</p>
    <p>{coins.price_change_percentage_24h}</p>      
    <p>{coins.total_volume}</p>      
    <p>{coins.market_cap}</p>      
    </div>
  )
}

export default CoinItem