export const fetchExchangeRates = async (currency: string) => {
  const res = await fetch(
    `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
  );
  return res;
};
