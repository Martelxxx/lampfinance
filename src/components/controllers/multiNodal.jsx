import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import './multiNodal.css';

const MultiNodal = () => {
    const { activeSection, setActiveSection } = useAppContext();
  
    return (
      <div className="multiNodal">
        {/* Navigation Buttons */}
        <div className="row stacked-buttons">
          <button className={`nav-button ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('home')}>Home</button>
          <button className={`nav-button ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>About Us</button>
          <button className={`nav-button ${activeSection === 'services' ? 'active' : ''}`} onClick={() => setActiveSection('services')}>Services</button>
          <button className={`nav-button ${activeSection === 'agent' ? 'active' : ''}`} onClick={() => setActiveSection('agent')}>Find An Agent</button>
          <button className={`nav-button ${activeSection === 'careers' ? 'active' : ''}`} onClick={() => setActiveSection('careers')}>Careers</button>
          <button className={`nav-button ${activeSection === 'faqs' ? 'active' : ''}`} onClick={() => setActiveSection('faqs')}>FAQs</button>
          <button className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')}>Contact</button>
        </div>
  
        {/* Section Content */}
        <div className="section-content">
          {activeSection === 'home' && (
            <>
              <h2>Welcome to Lamp Finance</h2>
              <p>Empowering your financial future.</p>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <h2>About Us</h2>
              <p>We are redefining financial access across Africa...</p>
            </>
          )}
          {activeSection === 'services' && (
            <>
              <h2>Our Services</h2>
              <p>Explore our wide range of financial services...</p>
            </>
          )}
          {activeSection === 'agent' && (
            <>
              <h2>Find An Agent</h2>
              <p>Locate an agent near you for assistance.</p>
            </>
          )}
          {activeSection === 'careers' && (
            <>
              <h2>Join Our Team</h2>
              <p>Discover career opportunities at Lamp Finance.</p>
            </>
          )}
          {activeSection === 'faqs' && (
            <>
              <h2>FAQs</h2>
              <p>Find answers to commonly asked questions.</p>
            </>
          )}
          {activeSection === 'contact' && (
            <>
              <h2>Contact Us</h2>
              <p>Reach out for support or inquiries.</p>
            </>
          )}
        </div>
  
        {/* Register & Login Section */}
        <div className="row action-buttons">
          <button className="action-button" id="registerBtn">Register</button>
          <button className="action-button" id="loginBtn">Login</button>
        </div>
      </div>
    );
  };
  
  export default MultiNodal;
