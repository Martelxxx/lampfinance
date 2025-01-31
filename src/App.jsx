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
import contact from './assets/contact.png'
import building from './assets/building.png'
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
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState('null');
  const flashRef = useRef(null);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveSubSection('null');
    if (flashRef.current) {
      flashRef.current.classList.remove('light-border');
      void flashRef.current.offsetWidth; // Trigger reflow
      flashRef.current.classList.add('light-border');
    }
  };

  const handleSubSectionClick = (subSection) => {
    setActiveSubSection(subSection);
    if (flashRef.current) {
      flashRef.current.classList.remove('light-border');
      void flashRef.current.offsetWidth; // Trigger reflow
      flashRef.current.classList.add('light-border');
    }
  };


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
          {activeSection === 'home' && (
            <>
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
                  <div className="ticker" ref={stockTickerRef}>
                    {stockMarketNews.map((stock, index) => (
                      <div key={index} className="ticker-item">
                        <strong>{stock.symbol}</strong>: {stock.price} ({stock.change})
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {activeSection === 'about' && (
            <div className="about-us-content">
              <h2>About Us</h2>
              <p>At Lamp Finance, we are redefining financial access across Africa, providing a seamless, secure, and convenient way for individuals and businesses to manage their money. Our mission is to empower communities by making financial services accessible, simple, and effective—whether you're saving, sending money, or growing your business.</p>
            </div>
          )}
          {activeSection === 'services' && (
            <div className="services-content">
              <h2>Our Services</h2>
              <p>We offer a wide range of financial services to meet the diverse needs of our customers, including personal banking, business banking, loans, and investment services.</p>
            </div>
          )}
          {activeSection === 'agent' && (
            <div className="agent-content">
              <h2>Find An Agent</h2>
              <p>Our network of agents is here to help you with all your financial needs. Use our agent locator to find an agent near you.</p>
            </div>
          )}
          {activeSection === 'careers' && (
            <div className="careers-content">
              <h2>Careers</h2>
              <p>Join our team and be a part of a dynamic and innovative financial institution. Explore our current job openings and apply today.</p>
            </div>
          )}
          {activeSection === 'faqs' && (
            <div className="faqs-content">
              <h2>FAQs</h2>
              <p>Have questions? We have answers. Browse our frequently asked questions to find the information you need.</p>
            </div>
          )}
          {activeSection === 'contact' && (
            <div className="contact-content"
            style={{
              backgroundImage: `url(${contact})`,
              backgroundSize: "auto 50%", // Increases height slightly
              backgroundPosition: "center top 150px",
              backgroundRepeat: "no-repeat", // Prevents repeating
              height: "400px", // Adjust height as needed
              
              // opacity: 0.9,
            }}>
              <h2>Contact Us</h2>
              <p>We are here to help. Get in touch with us through our contact form, phone, or email.</p>
              
            </div>
          )}
        </div>

        <div ref={flashRef} className='flash'>
          {activeSection === 'home' && (
            <>
              <img src={images[currentImage]} alt="Carousel" className="carousel-image" />
              <div className="quote-box">
                {quotes[currentQuote]}
              </div>
            </>
          )}
          {activeSection === 'about' && (
            <div className="about-us-flash"
            style={{
              backgroundImage: `url(${building})`,
              backgroundSize: "auto 100%", // Increases height slightly
              backgroundPosition: "center top 80px",
              backgroundRepeat: "no-repeat", // Prevents repeating
              height: "665px", // Adjust height as needed
              
              // opacity: 0.1,
            }}>
              <nav className="about-us-navbar">
                <ul>
                  <li><a href="#why" onClick={() => handleSubSectionClick('why')}>Why Choose Lamp Finance?</a></li>
                  <li><a href="#mission" onClick={() => handleSubSectionClick('mission')}>Who We Serve</a></li>
                  <li><a href="#values" onClick={() => handleSubSectionClick('values')}>Our Commitment</a></li>
                  <li><a href="#team" onClick={() => handleSubSectionClick('team')}>Team</a></li>
                </ul>
              </nav>
              {activeSubSection === 'why' && (
                <div className='why'>
                  <h2>Why Choose Lamp Finance?</h2>
                  <p>
                    <h3>Financial Inclusion at Your Fingertips</h3>
                    We believe that everyone deserves access to financial services, regardless of location or economic status. Our platform enables customers to open accounts, deposit funds, and manage their finances digitally, eliminating the barriers of traditional banking.
                    <h3>Fast & Secure Digital Transactions</h3>
                    With integrations like Wave and Orange Money, Lamp Finance offers an instant, secure, and hassle-free way to deposit money and conduct transactions. Whether you are opening a new account or making payments, you can trust that your funds are processed quickly and safely.
                    <h3>No Hidden Fees, Transparent Banking</h3>
                    We prioritize honesty and transparency. Our fees and services are straightforward, with no hidden costs or surprise deductions. You get to manage your money with complete confidence, knowing exactly what you're paying for.
                    <h3>Easy Account Opening & Instant Deposits</h3>
                    Opening an account with us is quick, simple, and digital. Whether you have an existing Wave or Orange Money wallet or prefer to use a partner agent, the process is seamless:
                    For digital users: Instantly transfer your initial deposit from your mobile wallet.
                    For cash users: Visit a partner agent to deposit money and start your account.
                    Your account is credited in real-time, and you receive an instant confirmation via SMS or email.
                    <h3>Reliable Support, Whenever You Need It</h3>
                    We understand that financial matters require trust and reliability. Our dedicated customer support team is available 24/7 to assist with any inquiries, whether it’s account management, deposits, or technical assistance.
                  </p>
                </div>
              )}
              {activeSubSection === 'mission' && (
                <div className='mission'>
                  <h2>Who We Serve</h2>
                  <p>We cater to individuals, small businesses, and entrepreneurs looking for a flexible and secure way to manage their money. Whether you are saving for the future, investing in your business, or simply looking for a trusted financial partner, Lamp Finance is here to support your journey.</p>
                </div>
              )}
              {activeSubSection === 'values' && (
                <div className='values'>
                  <h2>Our Commitment</h2>
                  <p>Lamp Finance is more than a financial institution—we are a partner in your growth. Our goal is to empower you with the tools, services, and security you need to take control of your financial future.</p>
                </div>
              )}
              {activeSubSection === 'team' && (
                <div className='team'>
                  <h2>Team</h2>
                  <p>Meet our dedicated team of professionals who are committed to providing exceptional financial services and support to our customers.</p>
                </div>
              )}
            </div>
          )}
          {activeSection === 'services' && (
            <div className="services-flash">
              <h2>Our Services</h2>
              <p>We offer a wide range of financial services to meet the diverse needs of our customers, including personal banking, business banking, loans, and investment services.</p>
            </div>
          )}
          {activeSection === 'agent' && (
            <div className="agent-flash">
              <h2>Find An Agent</h2>
              <p>Our network of agents is here to help you with all your financial needs. Use our agent locator to find an agent near you.</p>
            </div>
          )}
          {activeSection === 'careers' && (
            <div className="careers-flash">
              <h2>Careers</h2>
              <p>Join our team and be a part of a dynamic and innovative financial institution. Explore our current job openings and apply today.</p>
            </div>
          )}
          {activeSection === 'faqs' && (
            <div className="faqs-flash">
              <h2>FAQs</h2>
              <p>Have questions? We have answers. Browse our frequently asked questions to find the information you need.</p>
            </div>
          )}
          {activeSection === 'contact' && (
            <div
            className="contact-flash"
          >
            <h2>Contact Us</h2>
            <p>We are here to help. Get in touch with us through our contact form, phone, or email.</p>
          </div>
          )}
        </div>

        <div className="login-container">
          <div>
            <h2>New to Lamp Finance?</h2>
            <p>Click "Register" to sign up today. It only takes a few minutes!</p>
          </div>
          <div className="multiNodal">
            {/* Stacked Navigation Buttons */}
            <div className="row stacked-buttons">
              <button className="nav-button home" onClick={() => handleSectionClick('home')}>Home</button>
              <button className="nav-button" onClick={() => handleSectionClick('about')}>About Us</button>
              <button className="nav-button" onClick={() => handleSectionClick('services')}>Services</button>
              <button className="nav-button" onClick={() => handleSectionClick('agent')}>Find An Agent</button>
              <button className="nav-button" onClick={() => handleSectionClick('careers')}>Careers</button>
              <button className="nav-button" onClick={() => handleSectionClick('faqs')}>FAQs</button>
              <button className="nav-button" onClick={() => handleSectionClick('contact')}>Contact</button>
            </div>

            {/* Register & Login Side by Side */}
            <div className="row action-buttons">
              <button className="action-button" id="registerBtn">
                Register
              </button>
              <button className="action-button" id="loginBtn">
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