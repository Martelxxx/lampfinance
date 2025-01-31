import FlashNews from '../flashNews/flashNews';
import News from '../news/news';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <FlashNews />
      <News />
    </div>
  );
};

export default Home;
