import { AxiosResponse } from 'axios';
import $api from '../http/axios';
import { coinImage, coinInfo } from '../Types/coin-type';



export class Api {
  static getCoins() {
    return $api.get('markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
  }
  static getCoin(id: string): Promise<AxiosResponse<coinImage>> {
    return $api.get(id)
  }
  // static getHistory(id: string, days = 365, currency: string): Promise<AxiosResponse<coinImage>> {
  //   return $api.get(`${id}/market_chart?vs_currency=${currency}&days=${days}`)
  // }
}