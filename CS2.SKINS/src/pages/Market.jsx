import { useState, useEffect } from "react";
// import Header from "../components/Header";
import Sidebar from "../components/market/Sidebar";
import ProductGrid from "../components/market/ProductGrid";

function Market() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Estado para las categorías
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para los productos filtrados

  useEffect(() => {
    fetch("https://bymykel.github.io/CSGO-API/api/en/skins.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // Extraemos las categorías únicas
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category.name)) // Obtener categorías únicas
        ];
        setCategories(uniqueCategories); // Actualizamos las categorías
        setFilteredProducts(data); // Inicializamos los productos filtrados
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Función para manejar la búsqueda y el filtro por categoría
  const handleSearch = (query, selectedType) => {
    const filtered = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
      const matchesType = !selectedType || product.category.name === selectedType;
      return matchesQuery && matchesType;
    });

    setFilteredProducts(filtered); // Actualizamos los productos filtrados
  };

  return (
    <div className="market-page">
      <div className="market-content">
        <Sidebar
          categories={categories}
          onSearch={handleSearch} // Pasamos la función de búsqueda y filtro
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default Market;
