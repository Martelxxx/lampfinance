import { useAppContext } from '../../context/AppContext';
import { useEffect } from 'react';
import './aboutUs.css';
import home from '../../assets/home.png';

const AboutUs = () => {
  const { activeSection, activeSubSection, setActiveSubSection } = useAppContext();

  // Ensure sub-section resets when AboutUs is clicked
  useEffect(() => {
    if (activeSection === 'about') {
      setActiveSubSection('why');
    }
  }, [activeSection, setActiveSubSection]);

  return (
    <>
      {/* News Section Updates Based on Active Section */}
      <div className='news'>
        {activeSection === 'about' ? (
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>At Lamp Finance, we are redefining financial access across Africa, providing a seamless, secure, and convenient way for individuals and businesses to manage their money.</p>
            <p>Our mission is to empower communities by making financial services accessible, simple, and effective—whether you're saving, sending money, or growing your business.</p>
          </div>
        ) : (
          <div className="default-news">
            <h2>Brief News</h2>
            <p>Stay updated with the latest financial and business trends.</p>
          </div>
        )}
      </div>

      {/* Flash Section Updates Based on Active Sub-Section */}
      <div className='flash' style={{
        backgroundImage: activeSection === 'about' ? `url(${home})` : 'none',
        backgroundSize: activeSection === 'about' ? "auto 80%" : "none",
        backgroundPosition: "center top 80px",
        backgroundRepeat: "no-repeat",
        height: activeSection === 'about' ? "665px" : "auto"
      }}>
        <nav className="about-us-navbar">
          <ul>
            <li><a href="#why" onClick={() => setActiveSubSection('why')}>Why Choose Lamp Finance?</a></li>
            <li><a href="#mission" onClick={() => setActiveSubSection('mission')}>Who We Serve</a></li>
            <li><a href="#values" onClick={() => setActiveSubSection('values')}>Our Commitment</a></li>
            <li><a href="#team" onClick={() => setActiveSubSection('team')}>Team</a></li>
          </ul>
        </nav>

        <div className="about-us-content">
          {activeSubSection === 'why' && (
            <div className="why">
              <h2>Why Choose Lamp Finance?</h2>
              <p>We believe that everyone deserves access to financial services, regardless of location or economic status.</p>
              <p>Our platform enables customers to open accounts, deposit funds, and manage their finances digitally, eliminating the barriers of traditional banking.</p>
            </div>
          )}

          {activeSubSection === 'mission' && (
            <div className="mission">
              <h2>Who We Serve</h2>
              <p>At <strong>Lamp Finance</strong>, we understand that managing money isn't just about transactions—it's about security, growth, and achieving your dreams.</p>
            </div>
          )}

          {activeSubSection === 'values' && (
            <div className="values">
              <h2>Our Commitment</h2>
              <p>We believe that financial empowerment is the key to unlocking opportunities and building a brighter future.</p>
              <p>We are dedicated to making finance simple, accessible, and personalized.</p>
            </div>
          )}

          {activeSubSection === 'team' && (
            <div className="team">
              <h2>Meet Our Team</h2>
              <p>Our dedicated professionals work tirelessly to provide exceptional financial services and support.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
