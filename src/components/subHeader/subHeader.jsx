import React from 'react'
import { useAppContext } from '../../context/AppContext'; // ✅ FIXED IMPORT
import logo from '../../assets/logo.png'
import './subHeader.css'

const SubHeader = () => {
    const { setActiveSection } = useAppContext();
  
    return (
      <div className="subHeader">
        <img src={logo} className="logo" alt="Lamp Finance Logo" />
        <div className="subHeaderContent">
          <div>I would like to...</div>
          <div className="save" onClick={() => setActiveSection('services')}>Save</div>
          <div className="invest" onClick={() => setActiveSection('services')}>Invest</div>
          <div className="borrow" onClick={() => setActiveSection('services')}>Borrow</div>
          <div className="learn" onClick={() => setActiveSection('faqs')}>Learn</div>
        </div>
      </div>
    );
  };
  
  export default SubHeader;