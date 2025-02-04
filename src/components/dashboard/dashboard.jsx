import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import instagram from '../..//assets/instagram.png';
import twitter from '../..//assets/twitter.png';
import facebook from '../..//assets/facebook.png';
import linkedin from '../..//assets/linkedin.png';
import youtube from '../..//assets/youtube.png';
import tiktok from '../..//assets/tiktok.png';
import img1 from '../..//assets/1.png';
import img2 from '../..//assets/2.png';
import img3 from '../..//assets/3.png';
import img4 from '../..//assets/4.png';
import img5 from '../..//assets/5.png';
import img6 from '../..//assets/6.png';
import img7 from '../..//assets/7.png';
import img8 from '../..//assets/8.png';
import img9 from '../..//assets/9.png';
import img11 from '../..//assets/11.png';
import img12 from '../.././assets/12.png';
import contact from '../..//assets/contact.png'
import building from '../..//assets/building.png'
import ceo from '../..//assets/ceo.png'
import cfo from '../..//assets/cfo.png'
import emp1 from '../..//assets/emp1.png'
import emp2 from '../..//assets/emp2.png'
import emp3 from '../..//assets/emp3.png'
import emp4 from '../..//assets/emp4.png'
import emp5 from '../..//assets/emp5.png'
import emp6 from '../..//assets/emp6.png'
import emp7 from '../..//assets/emp7.png'
import emp8 from '../..//assets/emp8.png'
import home from '../..//assets/home.png'
import './dashboard.css';

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

const teamMembers = [
  {
    name: "Cashius Banknote",
    role: "Chief Executive Officer",
    img: ceo,
    bio: "Cashius leads our financial strategy with over 20 years of experience in global banking. His vision drives innovation and financial inclusion across our markets. Cashius leads our financial strategy with over 20 years of experience in global banking. His vision drives innovation and financial inclusion across our markets. Cashius leads our financial strategy with over 20 years of experience in global banking. His vision drives innovation and financial inclusion across our markets. Cashius leads our financial strategy with over 20 years of experience in global banking. His vision drives innovation and financial inclusion across our markets."
  },
  {
    name: "Penny Wise",
    role: "Chief Financial Officer",
    img: cfo,
    bio: "Penny ensures our financial health and growth through strategic planning, risk management, and financial forecasting to maintain stability and profitability."
  },
  {
    name: "Bill Chex",
    role: "Head of Accounting",
    img: emp1,
    bio: "Bill is responsible for managing financial records, ensuring compliance, and optimizing financial processes to keep our operations running smoothly."
  },
  {
    name: "Goldie Coin",
    role: "Director of Investments",
    img: emp2,
    bio: "Goldie oversees our investment strategies, identifying high-potential opportunities and maximizing returns for our clients and stakeholders."
  },
  {
    name: "Franklin Bucks",
    role: "Senior Loan Specialist",
    img: emp3,
    bio: "Franklin specializes in loan structuring and approval, helping individuals and businesses access the financial resources they need to grow and succeed."
  },
  {
    name: "Nickel Savings",
    role: "Customer Experience Manager",
    img: emp4,
    bio: "Nickel ensures a seamless and exceptional customer experience by optimizing support channels and enhancing user interactions."
  },
  {
    name: "Cheddar Stackz",
    role: "Head of Wealth Management",
    img: emp5,
    bio: "Cheddar provides expert financial planning and wealth management solutions, helping clients build and secure their financial future."
  },
  {
    name: "April O’Pay",
    role: "Director of Payroll Solutions",
    img: emp6,
    bio: "April leads our payroll services, ensuring accurate and timely salary disbursements while integrating advanced payroll management solutions."
  },
  {
    name: "Betty Budget",
    role: "Personal Finance Advisor",
    img: emp7,
    bio: "Betty empowers individuals with personalized budgeting strategies, helping them make informed financial decisions and achieve their savings goals."
  },
  {
    name: "Dime O’Deposit",
    role: "Head of Digital Banking",
    img: emp8,
    bio: "Dime drives our digital banking initiatives, leveraging technology to enhance accessibility and security for online and mobile banking services."
  }
];
  

const Dashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState('null');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const flashRef = useRef(null);

  
  // Logout handler: redirects to the home page
  const handleLogout = () => {
    window.location.href = "/";
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setActiveSubSection('null');
    setSelectedMember(null); // Reset selected team member when switching sections


    if (flashRef.current) {
      flashRef.current.classList.remove('light-border');
      void flashRef.current.offsetWidth; // Trigger reflow
      flashRef.current.classList.add('light-border');
    }
  };

  const handleSubSectionClick = (subSection) => {
    setActiveSubSection(subSection);
    setSelectedMember(null); // Reset selected team member when switching subsections


    if (flashRef.current) {
      flashRef.current.classList.remove('light-border');
      void flashRef.current.offsetWidth; // Trigger reflow
      flashRef.current.classList.add('light-border');
    }
  };

  const handleTeamMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
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

// Login form submission handler:
const handleLoginSubmit = (e) => {
  e.preventDefault();
  const phone = loginPhoneRef.current.value;
  const password = loginPasswordRef.current.value;

  // Check against dummy credentials
  if (phone === "12345678" && password === "password") {
    setIsLoggedIn(true);
  } else {
    alert("Invalid credentials");
  }
};

// If the user is logged in, render the Dashboard component:
if (isLoggedIn) {
  return <Dashboard />;
}

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

      <div className="body">
        <div className="dashboard-left">dashboard-left</div>
        <div className="flash" ref={flashRef}>flash</div>
        <div className="login-container">
          {!showRegisterForm && !showLoginForm ? (
            <>
              <div>div</div>
              <div className="multiNodal">
                multiNodal
                <div className="logout-button">
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </>
          ) : showRegisterForm ? (
            <div className="form-container">form-container</div>
          ) : (
            <div className="form-container">form-container</div>
          )}
          <div id="formContainer" className="hidden">hidden</div>
          <div className="tinyText">tinyText</div>
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

export default Dashboard;