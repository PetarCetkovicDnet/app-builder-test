import { useCallback, useEffect, useState } from 'react';
import { BoxOfficeRevenueType } from '../models/Financial/box-office-revenue-type';
import { getBoxOfficeRevenue, getSales, getStocks } from '../services/financial';
import { SalesType } from '../models/Financial/sales-type';
import { StocksType } from '../models/Financial/stocks-type';

export const useGetSales = () => {
  const [sales, setSales] = useState<SalesType[]>([]);

  const requestSales = useCallback(() => {
    let ignore = false;
    getSales()
      .then((data) => {
        if (!ignore) {
          setSales(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestSales();
  }, [requestSales]);

  return { requestFinancialSales: requestSales, financialSales: sales, setFinancialSales: setSales };
}

export const useGetBoxOfficeRevenue = () => {
  const [boxOfficeRevenue, setBoxOfficeRevenue] = useState<BoxOfficeRevenueType[]>([]);

  const requestBoxOfficeRevenue = useCallback(() => {
    let ignore = false;
    getBoxOfficeRevenue()
      .then((data) => {
        if (!ignore) {
          setBoxOfficeRevenue(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestBoxOfficeRevenue();
  }, [requestBoxOfficeRevenue]);

  return { requestFinancialBoxOfficeRevenue: requestBoxOfficeRevenue, financialBoxOfficeRevenue: boxOfficeRevenue, setFinancialBoxOfficeRevenue: setBoxOfficeRevenue };
}

export const useGetStocks = () => {
  const [stocks, setStocks] = useState<StocksType[]>([]);

  const requestStocks = useCallback(() => {
    let ignore = false;
    getStocks()
      .then((data) => {
        if (!ignore) {
          setStocks(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestStocks();
  }, [requestStocks]);

  return { requestFinancialStocks: requestStocks, financialStocks: stocks, setFinancialStocks: setStocks };
}
