import './footer.css';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="followUs">
        <span>Follow Us:</span>
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

      <div className="footerContent">
        <p>&copy; {new Date().getFullYear()} Lamp Finance. All rights reserved.</p>
        <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </div>

      <div className="languageOptions">
        <select>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
