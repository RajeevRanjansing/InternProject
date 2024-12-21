import React, { useState } from "react";
import "./index.css";

const App = () => {
  const images = [
    'nature1.jpg',
    'nature2.jpg',
    'nature3.webp',
    'nature4.jpg',
    'nature5.jpg',
    'nature6.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPreviousImage = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const showNextImage = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="container">
      <div className="gallery">
        <img id="current-image" src={images[currentIndex]} alt="Gallery Image" />
      </div>
      <div className="controls">
        <button id="prev-btn" onClick={showPreviousImage}>Previous</button>
        <button id="next-btn" onClick={showNextImage}>Next</button>
      </div>
    </div>
  );
};

export default App;
