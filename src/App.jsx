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
import ceo from './assets/ceo.png'
import cfo from './assets/cfo.png'
import emp1 from './assets/emp1.png'
import emp2 from './assets/emp2.png'
import emp3 from './assets/emp3.png'
import emp4 from './assets/emp4.png'
import emp5 from './assets/emp5.png'
import emp6 from './assets/emp6.png'
import emp7 from './assets/emp7.png'
import emp8 from './assets/emp8.png'
import home from './assets/home.png'
import Dashboard from './components/dashboard/dashboard'
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

// // Dashboard Component (displayed after successful login)
// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
//       {/* You can add more dashboard-specific UI here */}
//     </div>
//   );
// };


const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState('null');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const flashRef = useRef(null);

  // Refs for login form inputs
  const loginPhoneRef = useRef(null);
  const loginPasswordRef = useRef(null);

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

      <div className='body'>
      <div className='news'>
  {selectedMember ? (
    <div className="team-news">
      <h2>{selectedMember.name}</h2>
      <p>{selectedMember.role}</p>
      <img src={selectedMember.img} alt={selectedMember.name} className="team-image" />
      <p className="team-bio">
        {selectedMember.bio ? selectedMember.bio : "This team member plays a crucial role in our mission."}
      </p>
    </div>
  ) : activeSection === 'home' ? (
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
  ) : (
    <>
      {activeSection === 'about' && !selectedMember && (
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>At Lamp Finance, we are redefining financial access across Africa, providing a seamless, secure, and convenient way for individuals and businesses to manage their money. Our mission is to empower communities by making financial services accessible, simple, and effective—whether you're saving, sending money, or growing your business.</p>
        </div>
      )}
      {activeSection === 'services' && !selectedMember && (
        <div className="services-content">
          <h2>Our Services</h2>
          <p>We offer a wide range of financial services to meet the diverse needs of our customers, including personal banking, business banking, loans, and investment services.</p>
        </div>
      )}
      {activeSection === 'agent' && !selectedMember && (
        <div className="agent-content">
          <h2>Find An Agent</h2>
          <p>Our network of agents is here to help you with all your financial needs. Use our agent locator to find an agent near you.</p>
        </div>
      )}
      {activeSection === 'careers' && !selectedMember && (
        <div className="careers-content">
          <h2>Careers</h2>
          <p>Join our team and be a part of a dynamic and innovative financial institution. Explore our current job openings and apply today.</p>
        </div>
      )}
      {activeSection === 'faqs' && !selectedMember && (
        <div className="faqs-content">
          <h2>FAQs</h2>
          <p>Have questions? We have answers. Browse our frequently asked questions to find the information you need.</p>
        </div>
      )}
      {activeSection === 'contact' && !selectedMember && (
        <div className="contact-content"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: "auto 50%", // Increases height slightly
            backgroundPosition: "center top 150px",
            backgroundRepeat: "no-repeat", // Prevents repeating
            height: "400px", // Adjust height as needed
          }}>
          <h2>Contact Us</h2>
          <p>We are here to help. Get in touch with us through our contact form, phone, or email.</p>
        </div>
      )}
    </>
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
              backgroundImage: `url(${home})`,
              backgroundSize: "auto 80%", // Increases height slightly
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
                  <p>At <strong>Lamp Finance</strong>, we understand that managing money isn't just about transactions—it's about security, growth, and achieving your dreams. Whether you're an individual saving for the future, a small business looking to expand, or an entrepreneur seeking a trusted financial partner, we are here to provide the support and flexibility you need. We are more than just a financial service; we are a partner in your success.</p>

<p>We believe that banking should be easy, accessible, and tailored to your lifestyle. With our innovative digital solutions, you can manage your finances anytime, anywhere. Our seamless integration with <strong>Wave and Orange Money</strong> allows you to make instant deposits and secure transactions without the hassle of traditional banking. If you prefer in-person assistance, our extensive <strong>network of partner agents</strong> ensures that you always have a trusted expert nearby to help with deposits and financial services. Whether you're transferring funds from your digital wallet or visiting an agent for cash deposits, we make sure the process is smooth, secure, and efficient.</p>

<p>From the moment you deposit your first <strong>CFA 20,000</strong>, you are welcomed into a financial ecosystem designed to empower you. We keep you informed with real-time notifications and ensure your account is verified and ready for use without unnecessary delays. Whether you're a market vendor investing in new inventory, a young professional building your savings, or a business owner expanding operations, our goal is to provide financial tools that help you thrive.</p>

<p>At <strong>Lamp Finance</strong>, we are driven by values of <strong>trust, accessibility, and innovation</strong>. We know that financial freedom is about more than just numbers—it's about the confidence and security to pursue your ambitions. That’s why we strive to provide a seamless experience, combining technology with human-centered service to ensure you always feel supported.</p>

<p>Your journey towards financial success starts today. Whether you're making your first deposit or planning for the future, <strong>Lamp Finance</strong> is here to walk with you every step of the way. Welcome to a new era of financial empowerment—where your money works for you, and your future is brighter than ever.</p>

<p><em>“The digital financial services where you want them and when you want them.”</em></p>




                </div>
              )}
              {activeSubSection === 'values' && (
                <div className='values'>
                  <h2>Our Commitment</h2><p>At <strong>Lamp Finance</strong>, we believe that financial empowerment is the key to unlocking opportunities and building a brighter future. Our commitment is to provide you with the tools, knowledge, and support you need to take full control of your financial journey. We don’t just offer services—we build relationships, fostering a community where individuals, entrepreneurs, and small businesses can thrive with confidence.</p>

<p>We are dedicated to making finance simple, accessible, and personalized. Your financial needs are unique, and we strive to offer solutions that adapt to your goals, whether you're saving for the future, growing a business, or securing your family's financial well-being. Through transparency, innovation, and an unwavering focus on your success, we ensure that managing your money is not just easy, but empowering. We take pride in offering a seamless and intuitive experience that allows you to focus on what truly matters—achieving your financial dreams.</p>

<p>Trust is at the heart of everything we do. We understand that your financial well-being requires more than just convenience—it requires reliability and security. That’s why we are committed to providing a safe and dependable financial experience, where your aspirations are met with the support and resources you need to turn them into reality.</p>

<p>Beyond financial services, we are committed to fostering long-term prosperity for the communities we serve. We believe that true financial growth happens when people are equipped with the right knowledge and opportunities. That’s why we continuously invest in financial education, community initiatives, and partnerships that drive lasting impact. When you succeed, we all succeed.</p>

<p>At <strong>Lamp Finance</strong>, your growth is our mission. We are here to walk with you, to celebrate your achievements, and to provide unwavering support at every step. Whether you're taking your first steps towards financial independence or striving for new heights, we are honored to be part of your journey.</p>

<p><em>“Because your future deserves a financial partner as committed as you are.”</em></p>


                </div>
              )}
              {activeSubSection === 'team' && (
                <div className='team'>
                  <h2>Team</h2>
                  
                  <p>Meet our dedicated team of professionals who are committed to providing exceptional financial services and support to our customers. With expertise in banking, investments, and customer service, our team works tirelessly to ensure that your financial needs are met with precision, efficiency, and a touch of humor. Whether you’re saving for the future, growing your business, or managing your daily expenses, we are here to make finance simple, accessible, and maybe even a little fun.</p>

                  <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li key={index} onClick={() => handleTeamMemberClick(member)} className="team-member">
            <strong>{member.name}</strong> – {member.role}
          </li>
        ))}
      </ul>
    

<p>At <strong>Lamp Finance</strong>, we take your financial future seriously—while keeping the experience as engaging and accessible as possible. Our team is here to support you every step of the way, offering expert guidance, innovative solutions, and a commitment to helping you succeed.</p>

<p>More than a Team; a Family.</p>



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
      {!showRegisterForm && !showLoginForm ? (
        <>
          <div>
            <h2>New to Lamp Finance?</h2>
            <p>Click "Register" to sign up today. It only takes a few minutes!</p>
          </div>
          <div className="multiNodal">
            {/* Navigation Buttons */}
            <div className="row stacked-buttons">
              <button className="nav-button home" onClick={() => handleSectionClick('home')}>Home</button>
              <button className="nav-button" onClick={() => handleSectionClick('about')}>About Us</button>
              <button className="nav-button" onClick={() => handleSectionClick('services')}>Services</button>
              <button className="nav-button" onClick={() => handleSectionClick('agent')}>Find An Agent</button>
              <button className="nav-button" onClick={() => handleSectionClick('careers')}>Careers</button>
              <button className="nav-button" onClick={() => handleSectionClick('faqs')}>FAQs</button>
              <button className="nav-button" onClick={() => handleSectionClick('contact')}>Contact</button>
            </div>

            {/* Register & Login Buttons */}
            <div className="row action-buttons">
              <button 
                className="action-button" 
                id="registerBtn" 
                onClick={() => {
                  setShowRegisterForm(true);
                  setShowLoginForm(false);
                }}
              >
                Register
              </button>
              <button 
                className="action-button" 
                id="loginBtn"
                onClick={() => {
                  setShowLoginForm(true);
                  setShowRegisterForm(false);
                }}
              >
                Login
              </button>
            </div>
          </div>
        </>
      ) : showRegisterForm ? (
        <div className="form-container">
          <h2>Register</h2>
          <form>
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

            <div className="row buttons-container">
              <button type="submit" className="submit-button">Submit</button>
              <button 
                type="button" 
                className="cancel-button" 
                onClick={() => setShowRegisterForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
                        <div className="row">
              <div className="input-container">
                <label htmlFor="login-email">Phone Number</label>
                <input 
                type="number" 
                id="login-email" 
                placeholder="Enter your Phone Number"
                ref={loginPhoneRef} />
              </div>
            </div>

            <div className="row">
              <div className="input-container">
                <label htmlFor="login-password">Password</label>
                <input type="password" 
                id="login-password" 
                placeholder="Enter your Password"
                ref={loginPasswordRef}
                 />
              </div>
            </div>

            <div className="row buttons-container">
              <button type="submit" className="submit-button2">Login</button>
              <button 
                type="button" 
                className="cancel-button2" 
                onClick={() => setShowLoginForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}



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