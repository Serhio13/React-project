import React, { useState } from 'react';
import CoinItem from './coin-item';
import { useCoinRes } from '../../hooks/useCoinRes';
import '../Coins.css';
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
    <div className="container">
      <div>
        <Input placeholder="Search" onChange={handlerChange} />
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>current Price</p>
          <p>24h</p>
          <p>Volume</p>
          <p>Mkt Cap</p>
        </div>

        {filteredCoins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
