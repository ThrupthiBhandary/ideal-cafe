import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Container className="my-4">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://www.idealicecream.com/wp-content/uploads/slider/cache/bb830bf3264d548d560e52599ff80403/ideals-home-slide-kookie-karamel.jpg"
              alt="Gadbad Ice Cream"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://www.idealicecream.com/wp-content/uploads/slider/cache/e6a70d19996ab4fc730049cf0c4ba197/ideals-home-slide-80ml-container.jpg"
              alt="Gadbad Ice Cream"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded"
              src="https://www.idealicecream.com/wp-content/uploads/slider/cache/1b569e85ac569b1863f30868d059cfd3/ideal-icecreams-award-slide-01.jpg"
              alt="Chocolate Madness"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default HeroCarousel;
