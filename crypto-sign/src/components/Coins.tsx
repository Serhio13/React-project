import React, { useState } from 'react'
import CoinItem from './coin-item'
import { coinInfo } from '../Types/coin-type'
import useCoinRes from '../hooks/useCoinRes'

const Coins = () => {
    const {coins} = useCoinRes()
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>current_pricePrice</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Capppppp</p>
            </div>

            {coins.map((coins) => {
                return (
                    <CoinItem key={coins.id} coins={coins}/>
                )
            })}

        </div>
    </div>
  )
}

export default Coins