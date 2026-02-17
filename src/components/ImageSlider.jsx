import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import "./ImageSlider.css";

const images = [
  {
    src: "https://irregular-magazin.de/wp-content/uploads/2025/05/thecurrenthumb-1100x619.jpg",
    title: "Curren Caples",
    description: "Vans Curren Caples Pro Model",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0774/2393/5776/files/SP25_SKATE_OLDSKOOL36_LFSTL_NELLY_0379_1024x1024.jpg?v=1738180755",
    title: "Old Skool 36+",
    description:
      "El pasado y el presente se encuentran en los Skate Old Skool 36+",
  },
  {
    src: "https://scontent.flsc1-1.fna.fbcdn.net/v/t39.30808-6/473590453_9557602330957852_8015766469406028453_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0GMe-24r2HUQ7kNvwHgtHKr&_nc_oc=Adk6Lw_k51IIDg5febNe9rmrK_84imeyW3GPNCU0TsQ1qTWepca16Z3he-vhita0iUA&_nc_zt=23&_nc_ht=scontent.flsc1-1.fna&_nc_gid=7t2kEn3TBNM9hSqX_tnHvA&oh=00_Afse__H6nxpgOjXDT_z4S3YMCOX0tRRF5p-wk3vsyoWI4A&oe=6999FD9E",
    title: "Andrew Reynolds",
    description: "Vans Sk8-Hi Andrew Reynolds Pro Model",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextImage, 4000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isHovered]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      className="slider-container"
      {...handlers}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((item, index) => (
          <div className="slide" key={index}>
            <img
              src={item.src}
              alt={`Slide ${index}`}
              className="slider-image"
            />
            <div className="slide-text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-button left" onClick={prevImage}>
        ‹
      </button>
      <button className="nav-button right" onClick={nextImage}>
        ›
      </button>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToImage(index)}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
