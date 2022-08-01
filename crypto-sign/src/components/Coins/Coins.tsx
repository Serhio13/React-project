import React, { useState } from 'react';
import CoinItem from '../CoinItem/CoinItem';
import { useCoinRes } from '../../hooks/useCoinRes';
import './Coins.scss';
import { Link } from 'react-router-dom';
import { Input } from 'antd';

const Coins = () => {
  const { coins } = useCoinRes();
  const [search, setSearch] = useState('');

  const handlerChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.id.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="coin container">
        <Input placeholder="Search" onChange={handlerChange} />
        <div className="coin__heading">
          <p>#</p>
          <p>Coin</p>
          <p>current Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {filteredCoins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
    </div>
  );
};

export default Coins;
