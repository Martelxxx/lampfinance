import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'
import youtube from './assets/youtube.png'
import tiktok from './assets/tiktok.png'
import './App.css'

const App = () => {

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
              <img src= { instagram } alt="Instagram" />
            </a>
          </div>

          {/* <div className="search">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <p>🔎</p>
            </button>
          </div> */}
        <div className='footerContent'>
        {/* <p>© 2023 Lamp Finance. All rights reserved.</p> */}
        {/* <p>Privacy Policy</p>
        <p>Terms of Service</p> */}
        </div>

        <div className="languageOptions">
            <select>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>

      </footer>
    </>
  )
}

export default App
