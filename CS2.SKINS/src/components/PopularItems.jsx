// PopularItems.js
import { useState } from 'react';
import './PopularItems.css';

function PopularItems() {
  const images = [
    "/src/assets/16.png",
    "/src/assets/ak.png",
    "/src/assets/asmiov.png",
    "/src/assets/knife.png",
    "/src/assets/m4.png",
    "/src/assets/serpent.png",
    "/src/assets/usp.png",
    "/src/assets/16.png",
    "/src/assets/ak.png",
    "/src/assets/asmiov.png",
    "/src/assets/knife.png",
    "/src/assets/m4.png",
    "/src/assets/serpent.png",
    "/src/assets/usp.png",
  ];
  const itemsPerPage = 6;  // Cantidad de elementos a mostrar por página

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + images.length) % images.length);
  };

  return (
    <div className="popular-items-carousel">
        <h2 className='tittle'>Articulos Populares</h2>
      <button id='btn_prev' className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-images">
        {images.slice(currentIndex, currentIndex + itemsPerPage).map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`carousel-item-${index}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button id='btn_next'  className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default PopularItems;