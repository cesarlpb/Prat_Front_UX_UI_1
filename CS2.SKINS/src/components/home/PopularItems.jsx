import { useState, useEffect } from 'react';
import '../home_css/PopularItems.css'; //Css

function PopularItems() {
  const [items, setItems] = useState([]);
  const itemsPerPage = 6; //Paginas mostradas en el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  {/* FUNCION STRATRACK NO FUNCIONA */}
  const [isStatTrak, setIsStatTrak] = useState(false);
  {/* FUNCION STRATRACK NO FUNCIONA */}
  

  
  // Estados de las skins en Steam Market
  const exteriorOptions = [
    "Factory New",
    "Minimal Wear",
    "Field-Tested",
    "Well-Worn",
    "Battle-Scarred"
  ];

  // Fetch para obtener 20 armas diferentes
  useEffect(() => {
    fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")
      .then(response => response.json())
      .then(data => {
        // Seleccionamos 20 items aleatorios
        const randomItems = getRandomItems(data, 20);
        setItems(randomItems);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const getRandomItems = (array, numItems) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  //Siguiente arma
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % items.length);
  };

  //Anterior arma
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + items.length) % items.length);
  };

  // Función para abrir el popup
  const openPopup = (item) => {
    setSelectedItem(item);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setSelectedItem(null);
  };

  // Función para redirigir a Steam con el estado seleccionado
  const redirectToSteam = (exterior) => {
    if (!selectedItem) return;


    // STARTRAK NO FUNCIONA

    const statTrakSuffix = isStatTrak ? " StatTrak™" : "";
    const formattedName = `${selectedItem.name} (${exterior}${statTrakSuffix})`;

    // STARTRAK NO FUNCIONA



    // Codificar correctamente el nombre para la URL de Steam
    const encodedName = encodeURIComponent(formattedName);

    // URL de Steam Market para las armas
    const steamMarketURL = `https://steamcommunity.com/market/listings/730/${encodedName}`;

    // Abrir la URL en una nueva pestaña
    window.open(steamMarketURL, "_blank");
    closePopup();
  };

  return (
    <div className="popular-items-carousel">
      <h2 className='tittle'>Artículos Populares</h2>
      <button id='btn_prev' className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-images">
        {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
          <div key={index} className="carousel-item" onClick={() => openPopup(item)}>
            <img src={item.image} alt={item.name} className="carousel-image" />
          </div>
        ))}
      </div>
      <button id='btn_next' className="next" onClick={nextSlide}>&#10095;</button>

      {/* Popup de selección de estado */}
      {selectedItem && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="popup-title">{selectedItem.name}</h3>
            <div className="popup-item">
              <img src={selectedItem.image} alt={selectedItem.name} className="popup-image" />
              <p className="popup-item-name">Selecciona Estado</p>
            </div>
            <div className="exterior-options">
              {exteriorOptions.map((exterior, index) => (
                <button key={index} className="exterior-option-btn" onClick={() => redirectToSteam(exterior)}>
                  {exterior}
                </button>
              ))}

            </div>


              {/* FUNCION STRATRACK NO FUNCIONA */}

            <div className="stattrak-option">
              <label>
                <input 
                  type="checkbox" 
                  checked={isStatTrak} 
                  onChange={() => setIsStatTrak(!isStatTrak)} 
                />
                StatTrak™
              </label>
            </div>

            {/* FUNCION STRATRACK NO FUNCIONA */}

            <button className="close-btn" onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularItems;
