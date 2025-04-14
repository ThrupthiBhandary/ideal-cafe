import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const testimonials = [
  { 
    name: 'Charvi', 
    rating: 5, 
    text: 'Best ice cream in Mangalore!', 
    image: 'https://i.pinimg.com/originals/44/bd/ba/44bdba3db971ae2a2d6d4adef0eb3581.jpg' // Add image URL here
  },
  { 
    name: 'Meera', 
    rating: 4, 
    text: 'Loved the Gadbad!', 
    image: 'https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg?w=740' // Add image URL here
  },
  { 
    name: 'Mithansh', 
    rating: 5, 
    text: 'Amazing flavors and ambiance.', 
    image: 'https://png.pngtree.com/png-clipart/20240316/original/pngtree-avatar-cartoon-in-flat-style-png-image_14608459.png' // Add image URL here
  },
];

const Testimonials = () => {
  return (
    <Row className="mt-4">
      {testimonials.map((review, idx) => (
        <Col md={4} key={idx} className="mb-4">
          <Card>
            <Card.Body className="d-flex">
              {/* Image Section */}
              <img
                src={review.image}
                alt={review.name}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '1rem',
                }}
              />
              {/* Text Section */}
              <div>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{'⭐'.repeat(review.rating)}</Card.Text>
                <Card.Text>{review.text}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Testimonials;
