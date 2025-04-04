import React, { useState } from "react";
import "../market_css/Sidebar.css"; // Asegúrate de tener este CSS

function Sidebar({ categories, onSearch }) {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState(""); // Estado para el tipo de objeto

  // Función que ejecuta la búsqueda con el tipo de objeto seleccionado
  const handleSearch = () => {
    onSearch(query, selectedType); // Llama a la función del padre con la búsqueda y el tipo de objeto
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar skins..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Actualiza el estado con lo que escribe el usuario
        onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Activa la búsqueda al presionar Enter
      />
      
      <select
        className="type-select"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)} // Actualiza el estado del tipo seleccionado
      >
        <option value="">Todos los tipos</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button className="search-button" onClick={handleSearch}>🔍</button>
    </div>
  );
}

export default Sidebar;
