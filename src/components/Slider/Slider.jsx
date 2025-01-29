import { useState, useEffect } from 'react';
import s from './Slider.module.scss';

export const Slider = ({ text, height }) => {
  const images = [
    '/images/center-square-wroclaw.jpg',
    '/images/city-houses-reykjavik.jpg',
    '/images/fishmarket-hamborg.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // switches every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <div className={s.sliderStyle} style={{ height }}>
      <img src={images[currentIndex]} alt="Slider image" />
      <div className={s.headerText}>
        <h1>{text}</h1>
        <span></span>
      </div>
    </div>
  );
};
