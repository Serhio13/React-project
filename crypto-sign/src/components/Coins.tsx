import React from 'react'
import CoinItem from './coin-item'
import getCoins from '../services/coinGecoAPI'
import types from '../Types/coin-type'
import useCoin from '../services/coinGecoAPI'

interface PropTypes {
    coin: types
    getCoins: []
}

const Coins = (props: PropTypes) => {
    const {coins} = useCoin()
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>

            {/* {props.getCoins.map((coins: types) => {

                return (
                    <CoinItem key={coins.id} coin={} />
                )
            })} */}

        </div>
    </div>
  )
}

export default Coins