function ProductCard({ product, openPopup }) {
  return (
    <div className="product-card">
      <img  src={product.image} className="img-product" alt={product.name} />
      <h3>{product.name}</h3>
      <button className="add-to-cart-button" onClick={() => openPopup(product)}>
      <img src="../assets/carrito-de-compras.png" alt="Ícono de búsqueda" className="cart-icon" />
      </button>
    </div>
  );
}

export default ProductCard;
