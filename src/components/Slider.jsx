import React from 'react'
import { Carousel } from "react-bootstrap";
import devops from '../img/devops.jpeg';
import about from '../img/devops.jpeg';
import isa from '../img/devops.jpeg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={devops}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={about}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isa}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider