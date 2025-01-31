import FlashNews from '../flashNews/flashNews';
import News from '../news/news';
import Auth from '../controllers/auth';
import './body.css';

const Body = () => {
  return (
    <div className="body-container">
      {/* Left Column - News */}
      <div className="news">
        <News />
      </div>

      {/* Center Column - Flash News */}
      <div className="flash">
        <FlashNews />
      </div>

      {/* Right Column - Login */}
      <div className="login-container">
        <Auth />
      </div>
    </div>
  );
};

export default Body;
