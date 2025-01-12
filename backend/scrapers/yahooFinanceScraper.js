const axios = require('axios');
const cheerio = require('cheerio');

async function fetchYahooFinanceData(ticker) {
  try {
    const response = await axios.get(`https://finance.yahoo.com/quote/${ticker}`);
    const $ = cheerio.load(response.data);

    const price = $('fin-streamer[data-field="regularMarketPrice"]').text().trim();
    const change = $('fin-streamer[data-field="regularMarketChange"]').text().trim();
    const changePercent = $('fin-streamer[data-field="regularMarketChangePercent"]').text().trim();

    return {
      ticker,
      price,
      change,
      changePercent,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

module.exports = fetchYahooFinanceData;
