import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ end = [] }) => {
  if (!Array.isArray(end) || end.length === 0) return null;

  return (
    <Carousel fade interval={3000} pause="hover">
      {end.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.name}
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <Carousel.Caption style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '10px', padding: '10px' }}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            {item.source && <small>Source: {item.source}</small>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
