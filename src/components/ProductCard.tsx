import React from 'react';
import './ProductCard.css';

interface ProductProps {
  name: string;
  price: string;
  category: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, category, image }) => {
  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="product-overlay">
          <button className="view-details">Quick View</button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
