import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { SalesType } from '../models/Financial/sales-type';
import { StocksType } from '../models/Financial/stocks-type';

export async function getSales(): Promise<SalesType[]> {
  const response = await fetch('../../static-data/financial-sales-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getBoxOfficeRevenue(): Promise<BoxOfficeRevenueType[]> {
  const response = await fetch('../../static-data/financial-box-office-revenue-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}

export async function getStocks(): Promise<StocksType[]> {
  const response = await fetch('../../static-data/financial-stocks-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
