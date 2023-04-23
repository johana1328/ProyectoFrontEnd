import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carrucel.css";

const CarrucelInicio = () => {
  return (
     <Carousel>
      <Carousel.Item>
        
        <div class="row">
          <div class="col carrucelTitle" >
              <h1 class="carrucelTitle">SuperMarket</h1>
              <p class="text-slider">
                Encontraras todo lo que <br/> 
                necesites para tus <br/>
                insumos de consumo diario <br/>
                en Bogota </p>
          </div>
          <div class="col" >
            <img src="mercave-canasta-1.png" class="d-block" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="pexels-aleksandar-pasaric-3423860.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="fruits-g473e44332_1280.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}

export default CarrucelInicio;