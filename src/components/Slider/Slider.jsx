import { useState, useEffect } from 'react';
import s from './Slider.module.scss';


export const Slider = () => {
  const images = [
    '/images/center-square-wroclaw.jpg',
    '/images/city-houses-reykjavik.jpg',
    '/images/fishmarket-hamborg.jpg',
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // skifter hver 5 sekunder

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <div className={s.sliderStyle}>
      <img src={images[currentIndex]} alt="Slider image" />
    </div>
  );
};
