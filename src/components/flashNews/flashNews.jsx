import { useState, useEffect } from 'react';
import './flashNews.css';

// Import images
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img11, img12];

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

const FlashNews = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

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

  return (
    <div className="flash-news">
      <img src={images[currentImage]} alt="Carousel" className="carousel-image" />
      <div className="quote-box">{quotes[currentQuote]}</div>
    </div>
  );
};

export default FlashNews;
