import React, { useState, useContext } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import IceCreamCustomizer from './IceCreamCustomizer';
import { CartContext } from '../context/CartContext';

const dishes = [
  {
    id: 101,
    name: ' Burger',
    price: 230,
    image: 'https://cdn.wallpapersafari.com/62/92/z7KT5A.jpg',
    desc: 'Delight in a perfectly crafted burger, featuring a delicious patty, fresh lettuce, tomatoes, pickles, and a special sauce, all nestled in a soft, toasted bun..',
    type: 'Snack',
    rating: 5,
  },
  {
    id: 102,
    name: 'Sundae',
    price: 110,
    image: 'https://images.creativemarket.com/0.1.0/ps/6045694/1820/2627/m1/fpnw/wm1/twat89mzxirlupexvh3kubgkrs37otw59cy8lkuzfuyoh1ruo6grt99mwrvwujur-.jpg?1552352314&s=f3223957373aa673aaeb83a239daea60',
    desc: 'Savor a delicious sundae with creamy ice cream, rich sauce, and a perfect topping of nuts and a cherry.',
    type: 'Ice Cream',
    rating: 4,
  },
  {
    id: 103,
    name: 'Fruit Bowl',
    price: 90,
    image: 'https://img.freepik.com/premium-photo/bowl-ice-cream-fruit-with-spoonful-ice-cream_1090076-3562.jpg',
    desc: 'Fresh fruits & ice cream.Enjoy a refreshing fruit bowl filled with a colorful mix of fresh, juicy seasonal fruits.',
    type: 'Ice Cream',
    rating: 4,
  },
];

const PopularDishes = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCustomizeClick = (dish) => {
    setSelectedItem(dish);
    setShowCustomizer(true);
  };

  const handleAddWithCustomization = (customization) => {
    addToCart({ ...selectedItem, customization });
    setShowCustomizer(false);
    setSuccessMessage(`${selectedItem.name} added to cart successfully!`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Dishes</h2>

      {/* ✅ Success Message */}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <Row className="justify-content-center">
        {dishes.map((dish) => (
          <Col md={4} sm={6} xs={12} key={dish.id} className="mb-4 d-flex">
            <Card className="w-100 shadow-sm">
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={dish.image}
                  alt={dish.name}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.desc}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCustomizeClick(dish)}
                >
                  Customize & Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Customizer Modal */}
      <IceCreamCustomizer
        show={showCustomizer}
        onClose={() => setShowCustomizer(false)}
        onAdd={handleAddWithCustomization}
        basePrice={selectedItem ? selectedItem.price : 0}
      />
    </Container>
  );
};

export default PopularDishes;
