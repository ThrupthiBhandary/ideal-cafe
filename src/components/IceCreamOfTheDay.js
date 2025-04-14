import React, { useEffect, useState, useContext } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import './IceCreamOfTheDay.css'; // For animation if needed
import IceCreamCustomizer from './IceCreamCustomizer'; // Assuming IceCreamCustomizer is the component for customization
import { CartContext } from '../context/CartContext'; // Correct import of CartContext

const iceCreams = [
  {
    name: 'Thai coconut',
    image: 'https://th.bing.com/th/id/OIP.A-gnbAM2uVR8uo58sMnFwAHaEJ?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  },
  {
    name: 'Choco Fudge',
    image: 'https://homefoodie.com.ph/uploads/2018/07/Chocolate-Fudge-Ice-Creams_011-B.jpg',
  },
  {
    name: 'Mango Tango',
    image: 'https://www.chefkunalkapur.com/wp-content/uploads/2022/06/mango-ice-crea-recipe-1300x731.jpg?v=1654571941',
  },
  {
    name: 'Fruit Punch',
    image: 'https://th.bing.com/th/id/OIP.p8j061nWA85HMDXsDvwuzAHaEi?rs=1&pid=ImgDetMain',
  },
];

const IceCreamOfTheDay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedIceCream, setSelectedIceCream] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % iceCreams.length);
    }, 10000); // Change ice cream every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, image } = iceCreams[currentIndex];

  const handleAddToCart = () => {
    setSelectedIceCream({ name, image });
    setShowCustomizer(true); // Show the customization modal
  };

  const handleAddWithCustomization = (customization) => {
    addToCart({ ...selectedIceCream, customization }); // Add customized ice cream to cart
    setSuccessMessage(`${selectedIceCream.name} added to cart successfully!`); // Show success message
    setShowCustomizer(false); // Close the customizer modal after adding to cart
    setTimeout(() => setSuccessMessage(''), 3000); // Hide success message after 3 seconds
  };

  return (
    <Container className="my-5">
      {successMessage && <div className="success-message">{successMessage}</div>}
      <Row>
        {/* Ice Cream of the Day - Left Section */}
        <Col md={6}>
          <Card
            className="shadow-sm rounded d-flex flex-column justify-content-between align-items-center p-4"
            style={{ height: '500px' }}
          >
            <h4 className="mb-3">🍨 Ice Cream of the Day</h4>
            <div
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ height: '300px' }}
            >
              <img
                src={image}
                alt={name}
                className="img-fluid rounded"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title className="mt-3">{name}</Card.Title>
              <Button variant="primary" onClick={handleAddToCart}>Buy</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Ice Cream Special Offer - Right Section */}
        <Col md={6}>
  <Card
    className="shadow-sm rounded d-flex flex-column p-4"
    style={{ height: '500px', overflow: 'hidden' }}
  >
    {/* Top content */}
    <div style={{ flexShrink: 0 }}>
      <h4 className="mb-1 mt-0 text-primary">🎁 Today’s Special Offer</h4>
      <p className="mb-0">Buy any 2 scoops and get 1 topping free!</p>
      <p className="mb-2 text-muted">Offer valid until 10 PM today only!</p>
    </div>

    {/* Image wrapper */}
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        flexGrow: 1,
        width: '100%',
        padding: '1rem',
        height: '80%', // Ensure the image fills the available space
      }}
    >
      <img
        src="https://th.bing.com/th/id/R.7f8c132404ce1afaf3afc98a76b22543?rik=0P9lk38z6HUoDA&riu=http%3a%2f%2ftheprettyglam.com%2fcdn%2fshop%2fcollections%2fbuy-1-get-1-free-sale-banner-template-offer-vector-27411896_1200x1200.jpg%3fv%3d1635290861&ehk=y8eaiJHClRKAoHiSSZFeZJvI6Xra7SYB8jhn2rrmJbA%3d&risl=&pid=ImgRaw&r=0"
        alt="Offer"
        style={{
          maxWidth: '100%',
          maxHeight: '80%',
          objectFit: 'fill', // Ensure the image fits inside without distortion
        }}
      />
    </div>
  </Card>
</Col>


      </Row>

      {/* Customizer Modal */}
      <IceCreamCustomizer
        show={showCustomizer}
        onClose={() => setShowCustomizer(false)}
        onAdd={handleAddWithCustomization}
        basePrice={selectedIceCream ? 120 : 0} // Pass the price for the ice cream, adjust as needed
      />
    </Container>
  );
};

export default IceCreamOfTheDay;
