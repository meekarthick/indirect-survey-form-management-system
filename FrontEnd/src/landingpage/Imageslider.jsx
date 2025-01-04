import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      let index = 0;
  
      const changeImage = () => {
        index++;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = `translateX(${-index * 100}vw)`;
  
        if (index === images.length) {
          setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            index = 0;
          }, 1000); // Duration of the transition
        }
      };
  
      const interval = setInterval(changeImage, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  


    return (
        <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
    )
};

export default ImageSlider;

/*

import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      let index = 0;
  
      const changeImage = () => {
        index++;
        slider.style.transition = 'transform 1s ease-in-out';
        slider.style.transform = `translateX(${-index * 100}vw)`;
  
        if (index === images.length) {
          setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            index = 0;
          }, 1000); // Duration of the transition
        }
      };
  
      const interval = setInterval(changeImage, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  


    return (
        <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
    )
};

export default ImageSlider;
*/