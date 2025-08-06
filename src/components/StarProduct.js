import React from 'react';
import '../styles/StarProduct.css'; 




function StarProduct({ starProduct = [] }) {
  return (
    <div className="starProductRow">
      {starProduct.slice(0, 3).map((product, index) => (
        product?.url && product?.image ? (
          <a key={index} href={product.url} className="productCard">
            <div className="imageWrapper">
              <img src={product.image} alt={`Product ${index + 1}`} />
            </div>
          </a>
        ) : null
      ))}
    </div>
  );
}

export default StarProduct;
