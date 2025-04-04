import { useState } from "react";
import ProductCard from "./ProductCard";
import '../market_css/ProductGrid.css';

function ProductGrid({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isStatTrak, setIsStatTrak] = useState(false); // Estado para StatTrak
  const exteriorOptions = [
    "Factory New",
    "Minimal Wear",
    "Field-Tested",
    "Well-Worn",
    "Battle-Scarred"
  ];

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const redirectToSteam = (exterior) => {
    if (!selectedProduct) return;

    const statTrakSuffix = isStatTrak ? " StatTrak™" : "";
    const formattedName = `${selectedProduct.name} (${exterior}${statTrakSuffix})`;

    // Codificar el nombre correctamente para la URL de Steam
    const encodedName = encodeURIComponent(formattedName);
    const steamMarketURL = `https://steamcommunity.com/market/listings/730/${encodedName}`;

    // Abrir la URL en una nueva pestaña
    window.open(steamMarketURL, "_blank");
    closePopup();
  };

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} openPopup={openPopup} />
        ))
      ) : (
        <p>Cargando productos...</p>
      )}

      {/* Aquí se muestra el popup si hay un producto seleccionado */}
      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup">
            <h3 className="popup-title">{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-image" />
            <p className="popup-item-name">Selecciona Estado</p>
            <div className="exterior-options">
              {exteriorOptions.map((exterior, index) => (
                <button
                  key={index}
                  className="exterior-option-btn"
                  onClick={() => redirectToSteam(exterior)}
                >
                  {exterior}
                </button>
              ))}
            </div>

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

            <button className="close-btn" onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
