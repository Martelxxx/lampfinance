import StockTicker from '../stockTicker/stockTicker';
import './news.css';

const News = () => {
  const briefNews = [
    "Breaking: Major breakthrough in AI research",
    "Local elections results announced today",
    "Global warming reaches critical levels, scientists warn",
    "New electric car shatters distance records",
    "Tech giant acquires startup in billion-dollar deal",
    "Major airline announces new international routes",
    "Sports update: National team wins championship",
    "Healthcare innovation reduces surgery risks",
    "Stock market sees record-high gains this week",
    "AI-powered robots are now assisting in hospitals",
  ];

  return (
    <div className="news">
      {/* Brief News Section */}
      <div className="brief-news">
        <h2>Brief News</h2>
        <ul>
          {briefNews.map((news, index) => (
            <li key={index}>{news}</li>
          ))}
        </ul>
      </div>

      {/* Stock Market News Section */}
      <StockTicker />
    </div>
  );
};

export default News;
