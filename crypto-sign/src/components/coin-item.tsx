import React, { FC } from 'react'
import { coinInfo } from '../Types/coin-type';
import './Coins.css';


const CoinItem: FC<{coins: coinInfo}> = ({coins}) => {
  
  return (
  
    <div className='coin-row'>
        <p>{coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={coins.image} alt={coins.name}></img>
            <p>{coins.symbol.toUpperCase()}</p>
        </div>  
    <p>${coins.current_price.toLocaleString()}</p>
    <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
    <p>${coins.total_volume.toLocaleString()}</p>      
    <p>${coins.market_cap.toLocaleString()}</p>      
    </div>
  )
}

export default CoinItem