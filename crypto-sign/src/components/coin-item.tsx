import React from 'react'
import types from '../Types/coin-type'
import getCoins from '../services/coinGecoAPI'

interface PropTypes {
    coin: types
}

const CoinItem = (props: PropTypes) => {
  return (
    <div className='coin-row'>
        <p>{props.coin.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coin.image} alt={props.coin.name}></img>
            <p>{props.coin.symbol}</p>
        </div>  
    <p>{props.coin.current_price}</p>
    <p>{props.coin.price_change_percentage_24h}</p>      
    <p>{props.coin.total_volume}</p>      
    <p>{props.coin.market_cap}</p>      
    </div>
  )
}

export default CoinItem