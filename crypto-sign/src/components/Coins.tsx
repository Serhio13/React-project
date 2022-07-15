import React from 'react'
import CoinItem from './coin-item'
import {useCoinRes} from '../hooks/useCoinRes'
import './Coins.css'
import {Link} from 'react-router-dom'

const Coins = () => {
    const {coins} = useCoinRes()
    return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>current Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>

            {coins.map((coins) => {
                return (
                    <Link to={`/coin/${coins.id}`} key={coins.id}>
                        <CoinItem coins={coins}/>
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Coins