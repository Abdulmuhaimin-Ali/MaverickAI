const fetchYahooFinanceData = require('./yahooFinanceScraper');

test('fetchYahooFinanceData should return data for a valid ticker', async () => {
  const data = await fetchYahooFinanceData('AAPL');
  expect(data).toHaveProperty('ticker', 'AAPL');
  expect(data).toHaveProperty('price');
  expect(data).toHaveProperty('change');
  expect(data).toHaveProperty('changePercent');
});