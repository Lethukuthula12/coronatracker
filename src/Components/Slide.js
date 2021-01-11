import React from "react";
import "react-slideshow-image/dist/styles.css";
import "react-slideshow-image/dist/styles.css";
import Carousel from 'react-bootstrap/Carousel'



const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3737918/pexels-photo-3737918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4498605/pexels-photo-4498605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4457913/pexels-photo-4457913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

const Testimorials = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <p className="tes-parag">
          Guys, you rook! made a purchase at your store recently. The order has
          been shipped and delivered on time. The quality is superb!  The
          Price is quite reasonable. Told all my friends about your excellent
          service and variety of choices. I think i i'll be your loyal
           customer in future as well. I wish your store may more years of
          prosperty
        </p>
        <span className="customer-name">D.R Sihle Zikalala</span>
      </Carousel.Item>
      <Carousel.Item>
        <p className="tes-parag">
          Guys, you rook! made a purchase at your store recently. The order has
          been shipped and delivered on time. The quality is superb! <br /> The
          Price is quite reasonable. Told all my friends about your excellent
          service and variety of choices. I think i i'll be your loyal
          <br /> customer in future as well. I wish your store may more years of
          prosperty
        </p>
        <span className="customer-name">D.R Sihle Zikalala</span>
      </Carousel.Item>
      <Carousel.Item>
        <p className="tes-parag">
          Guys, you rook! made a purchase at your store recently. The order has
          been shipped and delivered on time. The quality is superb! <br /> The
          Price is quite reasonable. Told all my friends about your excellent
          service and variety of choices. I think i i'll be your loyal
          <br /> customer in future as well. I wish your store may more years of
          prosperty
        </p>
        <span className="customer-name">D.R Sihle Zikalala</span>
      </Carousel.Item>
    </Carousel>
  );
};

export {Slideshow, Testimorials};