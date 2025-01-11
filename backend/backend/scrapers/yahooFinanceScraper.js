const axios = require('axios');
const cheerio = require('cheerio');

async function fetchYahooFinanceData(ticker) {
  try {
    const url = `https://finance.yahoo.com/quote/${ticker}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('fin-streamer[data-field="regularMarketPrice"]').text();
    const change = $('fin-streamer[data-field="regularMarketChange"]').text();
    const changePercent = $('fin-streamer[data-field="regularMarketChangePercent"]').text();

    return {
      ticker,
      price,
      change,
      changePercent,
    };
  } catch (error) {
    console.error(`Error fetching data for ${ticker}:`, error);
    return null;
  }
}

// Example usage
fetchYahooFinanceData('AAPL').then(data => console.log(data));

module.exports = fetchYahooFinanceData;