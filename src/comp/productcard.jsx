
import React from 'react';
import './product.css';

const ProductCard = ({ product }) => {
  
 


  return (
    <div className="card" >
      
      <div className="card-body">
      <img src={product.image} alt={product.title} />
        <h4 className="card-title">{product.title}</h4>
        <p className="card-subtitle mb-2 text-muted">${product.price}</p>
        <button >Add to cart</button>
        
      </div>
    </div>
  );
};

export default ProductCard;