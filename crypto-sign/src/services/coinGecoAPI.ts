import axios, { AxiosResponse } from 'axios';
import $api from '../http/axios';
import { coinInfo } from '../Types/coin-type';



export class Api {
  static getGoins() {
    return $api.get('markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
  }
  static getCoin(id: string): Promise<AxiosResponse<coinInfo>> {
    return $api.get(id)
  }
}