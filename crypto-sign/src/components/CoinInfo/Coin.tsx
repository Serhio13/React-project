import { Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCoin } from '../../hooks/useCoinRes';

import './Coin.css';
import { Spin, Tooltip } from 'antd';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Coin = () => {
  const { coinId } = useParams();
  const { coins, loading } = useCoin(coinId);

  return (
    <Spin size="large" spinning={loading}>
      <div>
        <div className="coin-container">
          <div className="content">
            <h1>{coins?.name}</h1>
          </div>
          <div className="content">
            <div className="rank">
              <span className="rank-btn">Rank # {coins?.market_cap_rank}</span>
            </div>
            <div className="info">
              <div className="coin-heading">
                <img src={coins?.image.small} alt={coins?.id}></img>
                <p>{coins?.name}</p>
                <p>{coins?.symbol.toUpperCase()}/USD</p>
              </div>
              <div className="coin_price">
                <h1>
                  ${coins?.market_data.current_price.usd.toLocaleString()}
                </h1>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="priceChange">
              <Tooltip title="price change in the last hour" color="#33343b8e">
                <div className="column">
              <div>1h</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
              <Tooltip title="price change in the last 24 hours" color="#33343b8e">
                <div className="column">
              <div>24h</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
              <Tooltip title="price change in the last 7 days" color="#33343b8e">
                <div className="column">
              <div>7d</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
              <Tooltip title="price change in the last 14 days" color="#33343b8e">
                <div className="column">
              <div>14d</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
              <Tooltip title="price change in the last 30 days" color="#33343b8e">
                <div className="column">
              <div>30d</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
              <Tooltip title="price change over the last year" color="#33343b8e">
                <div className="column">
              <div>7y</div>
              <div style={{ color: parseInt(coins?.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2) as string) > 0 ? 'green' : 'red'}}>
                {coins?.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%
              </div>
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="content">
            <div className="stats">
              <div className="left">
                <div className="row">
                  <h4>24 Hour low</h4>
                  <p>${coins?.market_data.low_24h.usd.toLocaleString()}</p>
                </div>
                <div className="row">
                  <h4>24 Hour high</h4>
                  <p>${coins?.market_data.high_24h.usd.toLocaleString()}</p>
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>24 Market Cap</h4>
                  <p>${coins?.market_data.market_cap.usd.toLocaleString()}</p>
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  <p>{coins?.market_data.circulating_supply}</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="about">
                <h3>About</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: coins?.description.en as string,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default Coin;
