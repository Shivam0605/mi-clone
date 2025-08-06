import React from 'react'
import Offer from "./Offer.js"
import "../styles/Offers.css"


function Offers({ offers = [] }) {
  return (
    <div className="offersSection">
      {offers.map((item, index) => (
        <a href={item.url} key={index}>
          <img src={item.image} alt={`Offer ${index + 1}`} />
        </a>
      ))}
    </div>
  );
}

export default Offers;
