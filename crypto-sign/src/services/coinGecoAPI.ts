import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

export class Api {
  static getGoins() {
    return axios.get(url)
  }
}