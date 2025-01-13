import yscraper as yf

def get_stock_data(ticker):
    stock = yf.Ticker(ticker)
    data = stock.history(period="1d")
    return {
        "symbol": ticker,
        "price": data['Close'].iloc[-1],
        "change_percent": (data['Close'].iloc[-1] - data['Open'].iloc[-1]) / data['Open'].iloc[-1] * 100,
        "volume": data['Volume'].iloc[-1],
        "market_cap": stock.info['marketCap'],
        "pe_ratio": stock.info['trailingPE'],
        "div_yield": stock.info['dividendYield']
    }

if __name__ == "__main__":
    ticker = "AAPL"
    stock_data = get_stock_data(ticker)
    print(stock_data)