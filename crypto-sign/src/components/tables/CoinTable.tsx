import React, { FC } from 'react'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { coinImage } from '../../Types/coin-type';
import { useParams } from 'react-router-dom';
import { useCoin } from '../../hooks/useCoinRes';

const CoinTable = () => {
    const {coinId} = useParams()
    const {coins, loading} = useCoin(coinId)


    interface DataType {
        key: React.Key;
        name: any;
        age: any;
        address: any;
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: '1h',
          dataIndex: 'name',
        },
        {
          title: '24h',
          dataIndex: 'age',
        },
        {
          title: '7d',
          dataIndex: 'address',
        },
        {
          title: '14d',
          dataIndex: 'address',
        },
        {
          title: '30d',
          dataIndex: 'address',
        },
        {
          title: '1y',
          dataIndex: 'address',
        }
      ];
      
      const data: DataType[] = [
        {
          key: '1',
          name: coins?.market_data.price_change_percentage_1h_in_currency,
          age: coins?.market_data.price_change_percentage_24h_in_currency,
          address: coins?.market_data.price_change_percentage_7d_in_currency,
        },
        // {
        //   key: '2',
        //   name: 'Jim Green',
        //   age: 42,
        //   address: 'London No. 1 Lake Park',
        // },
        // {
        //   key: '3',
        //   name: 'Joe Black',
        //   age: 32,
        //   address: 'Sidney No. 1 Lake Park',
        // },
      ];
  return (
    <div>
      <h4>Middle size table</h4>
      <Table columns={columns} dataSource={data} size="middle" />
      <h4>Small size table</h4>
      <Table columns={columns} dataSource={data} size="small" />
    </div>
  )
}

export default CoinTable