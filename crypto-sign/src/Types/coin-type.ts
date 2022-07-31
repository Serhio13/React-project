import { type } from "@testing-library/user-event/dist/type";

export type coinInfo = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    thumb: string;
    small: string;
    large: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi?: any;
    last_updated: Date;
}

export type coinItem = {
    image: {
        thumb: string,
        small: string,
        large: string
    },
    id: string;
    symbol: string;
    name: string;
    thumb: string;
    small: string;
    large: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: Date;
    atl: number;
    atl_change_percentage: number;
    atl_date: Date;
    roi?: any;
    last_updated: Date;
    market_data: {
        current_price: {
            usd: number;
        },
        price_change_percentage_1h_in_currency: {
            usd: number;
        },
        price_change_percentage_24h_in_currency: {
            usd: number;
        },
        price_change_percentage_7d_in_currency: {
            usd: number;
        },
        price_change_percentage_14d_in_currency: {
            usd: number;
        },
        price_change_percentage_30d_in_currency: {
            usd: number;
        },
        price_change_percentage_1y_in_currency: {
            usd: number;
        },
        low_24h: {
            usd: number;
        },
        high_24h: {
            usd: number;
        },
        market_cap: {
            usd: number;
        },
        circulating_supply: number
    },
    description: {
        en: string;
    }
  }