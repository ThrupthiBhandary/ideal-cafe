import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Gift, Clock, Sun, Star, EmojiSmile } from 'react-bootstrap-icons';
import './Offers.css';

const offers = [
  
  { title: 'Happy Hours', desc: '50% off from 4–6 PM!', icon: <Clock size={28} />, bg:'primary' },
  { title: 'Summer Specials', desc: 'Cool combos for hot days.', icon: <Sun size={28} />, bg: 'warning' },
  { title: 'Loyalty Bonus', desc: 'Earn points with every order.', icon: <Star size={28} />, bg: 'success' },
  { title: 'Welcome Treat', desc: 'Free scoop for first-time users!', icon: <Gift size={28} />, bg: 'danger' },
  { title: 'Family Pack Special', desc: 'Buy 3 family-sized ice creams and get the 4th one for free!', icon: <EmojiSmile size={28} />, bg: 'primary' },
  { title: 'First-Time Order?', desc: 'First-Time Order?', icon: <Clock size={28} />, bg: 'info' },
  { title: 'Combo Deal', desc: 'Save 10% when you buy any ice cream combo pack.', icon: <Sun size={28} />, bg: 'warning' },
  { title: 'Free Toppings Day!', desc: 'Every Sunday, get a free topping of your choice on any ice cream.', icon: <Star size={28} />, bg: 'success' },
  { title: 'Refer & Earn', desc: 'Refer a friend and get a free scoop on your next order!', icon: <Gift size={28} />, bg: 'danger' },
  { title: 'Birthday Surprise', desc: 'Celebrate your birthday with us and get a free ice cream scoop.', icon: <EmojiSmile size={28} />, bg: 'primary' },
  { title: 'Welcome Treat', desc: 'Free scoop for first-time users!', icon: <Gift size={28} />, bg: 'danger' },
  { title: 'Summer Specials', desc: 'Cool combos for hot days.', icon: <Sun size={28} />, bg: 'warning' },
];

const Offers = () => {
  return (
    <Row className="mt-4 offers-container">
      {offers.map((offer, idx) => (
        <Col md={6} lg={4} key={idx} className="mb-4">
          <Card
            bg={offer.bg}
            text="white"
            className={`h-100 shadow-sm offer-card offer-${offer.bg}`}
            style={{ borderRadius: '1rem' }}
          >
            <Card.Body>
              <div className="d-flex align-items-center mb-2">
                {offer.icon}
                <Card.Title className="ms-2 mb-0">{offer.title}</Card.Title>
              </div>
              <Card.Text>{offer.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Offers;
