import { useEffect, useRef } from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logo from './assets/logo.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png';
import linkedin from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import tiktok from './assets/tiktok.png';
import './App.css';

const App = () => {
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
    <>
      <div className='header'>
        <ul>
          <li>Consumer Microfinance</li>
          <li>Commercial Microfinance</li>
          <li>Group Lending</li>
          <li>Community Development</li>
        </ul>
      </div>

      <div className='subHeader'>
        <img src={logo} className="logo" alt="Company logo" />
        <div className="subHeaderContent">
          <div>I would like to...</div>
          <div className='save'>Save</div>
          <div className='invest'>Invest</div>
          <div className='borrow'>Borrow</div>
          <div className='learn'>Learn</div>
        </div>
      </div>

      <div className='body'>
        <div className='news'>
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
          <div className="stock-news">
    <h2>Stock Market News</h2>
    <div className="ticker-container">
        <div className="ticker">
            {stockMarketNews.map((stock, index) => (
                <div key={index} className="ticker-item">
                    <strong>{stock.symbol}</strong>: {stock.price} ({stock.change})
                </div>
            ))}
        </div>
    </div>
</div>
        </div>

        <div className='flash'>
          Flash News!!!
          {/* Add your body content here */}
        </div>

       
          <div className="login-container">
            <div><p><h2>New to Lamp Finance?</h2> Click "Register" to sign up today. It only takes a few minutes!</p></div>
             <div className="multiNodal">
            {/* First Row */}
            <div className="row">
              <div className="input-container">
                <label htmlFor="pin">PIN</label>
                <input type="text" id="pin" placeholder="Enter your PIN" />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your Username" />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your Email" />
              </div>
            </div>

            {/* Second Row */}
            <div className="row">
              <div className="input-container full-width">
                <label htmlFor="additional-info">Additional Info</label>
                <input type="text" id="additional-info" placeholder="Optional field" />
              </div>
            </div>
            </div>
            {/* Third Row */}
            <div className="row">
              <div className="input-container">
                <button type="button">Register</button>
              </div>
              <div className="input-container">
                <button type="button">Login</button>
              </div>
              <div className="input-container">
                <button type="button">Reset</button>
              </div>
            </div>
            <div className='tinyText'>By logging in, you agree to our Terms of Service and Privacy Policy. We prioritize the security of your information and use industry-standard encryption to protect your data. Unauthorized access is strictly prohibited and may be subject to legal action.
            </div>
          </div>
        </div>

      <footer className="footer">
        <div className="followUs">
          Follow Us:
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className='footerContent'></div>
        <div className="languageOptions">
          <select>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </footer>
    </>
  );
};

export default App;
