import { useEffect, useRef, useState } from 'react';
import logo from './assets/logo.png';
import instagram from './assets/instagram.png';
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png';
import linkedin from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import tiktok from './assets/tiktok.png';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';
import './App.css';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img11,
  img12,
];

const quotes = [
  "Empowering Dreams, One Account at a Time",
  "Banking Where You Are, When You Need It",
  "Your Business, Our Support",
  "Community-Driven, Customer-Focused",
  "More Than Banking—A Financial Movement",
  "The Future of Finance is Here",
  "Secure. Fast. Convenient.",
  "Lighting the Way to Financial Growth",
  "More Than a Bank—A Partner in Your Success",
  "Your Money, Your Terms",
  "Connecting Africa to Global Opportunities",
  "A Future Without Borders",
  "Local Impact, Global Vision",
  "The World is Yours to Conquer",
  "Banking for a Borderless Economy"
];


const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  // const [quoteBoxPosition, setQuoteBoxPosition] = useState({ top: '10%', left: '70%' });
  const flashRef = useRef(null);

  // // Function to set a random position in the top-right quadrant
  // const setRandomPosition = () => {
  //   if (flashRef.current) {
  //     const flashWidth = flashRef.current.clientWidth;
  //     const flashHeight = flashRef.current.clientHeight;

  //     // Generate random positions within the top-right quadrant
  //     const randomTop = Math.random() * (flashHeight / 2); // Top half
  //     const randomLeft = (flashWidth / 2) + Math.random() * (flashWidth / 2); // Right half

  //     setQuoteBoxPosition({ top: `${randomTop}px`, left: `${randomLeft}px` });
  //   }
  // };

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);

    // const positionInterval = setInterval(setRandomPosition, 5000); // Change quote-box position every 5s

    return () => {
      clearInterval(imageInterval);
      clearInterval(quoteInterval);
      // clearInterval(positionInterval);
    };
  }, []);

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

        <div ref={flashRef} className='flash'>
          <img src={images[currentImage]} alt="Carousel" className="carousel-image" />
          <div className="quote-box">
            {quotes[currentQuote]}
          </div>
        </div>
      {/* </div> */}

       
        <div className="login-container">
  {/* User Prompt Section */}
  <div>
    <p>
      <h2>New to Lamp Finance?</h2> Click "Register" to sign up today. It only takes a few minutes!
    </p>
  </div>

  {/* MultiNodal Section */}
  <div className="multiNodal">
    {/* Stacked Navigation Buttons */}
    <div className="row stacked-buttons">
      <button className="nav-button home">Home</button>
      <button className="nav-button">About Us</button>
      <button className="nav-button">Services</button>
      <button className="nav-button">Find An Agent</button>
      <button className="nav-button">Careers</button>
      <button className="nav-button">FAQs</button>
      <button className="nav-button">Contact</button>
    </div>

    {/* Register & Login Side by Side */}
    <div className="row action-buttons">
      <button className="action-button" id="registerBtn" onClick={() => toggleForm('register')}>
        Register
      </button>
      <button className="action-button" id="loginBtn" onClick={() => toggleForm('login')}>
        Login
      </button>
    </div>

    {/* Dynamic Form (Initially Hidden) */}
    <div id="formContainer" className="hidden">
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
        <div className="input-container full-width">
          <label htmlFor="additional-info">Additional Info</label>
          <input type="text" id="additional-info" placeholder="Optional field" />
        </div>
      </div>
    </div>
  </div>

  {/* Footer Disclaimer */}
  <div className="tinyText">
    By logging in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.  
    Your security is our priority. Unauthorized access is strictly prohibited.
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
