interface Rates {
  [key: string]: string;
}

export interface FetchPayload {
  currency: string;
  rates: Rates;
}

export const getAllCurrencyKeys = (data: FetchPayload) => {
  return Object.keys(data.rates);
};

export const getRateByCurrency = (data: FetchPayload, currency: string) => {
  return data.rates[currency];
};

export const getPercentOfTotal = (total: number, percent: number) => {
  return (percent / 100) * total;
};

export const convertDollarsToCrypto = (dollarAmount: number, rate: number) => {
  return dollarAmount * rate;
};

export const formatPercentStringToNumber = (percent: string) => {
  return parseInt(percent.split('%')[0]);
};
