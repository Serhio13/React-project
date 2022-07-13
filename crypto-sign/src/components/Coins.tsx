import React, { FC } from 'react'
import CoinItem from './coin-item'
import useCoinRes from '../hooks/useCoinRes'
import './Coins.css'
import {Link} from 'react-router-dom'
import Coin from '../routes/Coin'

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
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins}/>
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Coins