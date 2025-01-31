import { useEffect, useRef } from 'react';
import './stockTicker.css';

const StockTicker = () => {
  const stockMarketNews = [
    { symbol: "AAPL", name: "Apple Inc.", price: "$145.09", change: "+0.45%" },
    { symbol: "TSLA", name: "Tesla Inc.", price: "$842.19", change: "-1.25%" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: "$3,456.78", change: "+0.85%" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$2,899.12", change: "-0.60%" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$299.35", change: "+0.30%" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "$480.20", change: "+1.75%" },
    { symbol: "META", name: "Meta Platforms", price: "$370.60", change: "-0.20%" },
    { symbol: "NFLX", name: "Netflix Inc.", price: "$430.12", change: "+0.95%" },
  ];

  const stockTickerRef = useRef(null);

  useEffect(() => {
    if (stockTickerRef.current) {
      const list = stockTickerRef.current;
      list.innerHTML += list.innerHTML; // Duplicate content for seamless scrolling
    }
  }, []);

  return (
    <div className="stock-news">
      <h2>Stock Market News</h2>
      <div className="ticker-container">
        <div className="ticker" ref={stockTickerRef}>
          {stockMarketNews.map((stock, index) => (
            <div key={index} className="ticker-item">
              <strong>{stock.symbol}</strong>: {stock.price} ({stock.change})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;
