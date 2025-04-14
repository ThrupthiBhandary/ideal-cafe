import React, { useState, useContext } from 'react';
import './Menu.css';

import { Card, Row, Col, Form } from 'react-bootstrap';
import IceCreamCustomizer from './IceCreamCustomizer';
import { CartContext } from '../context/CartContext';
import ProductDetailModal from './ProductDetailModal';
import { useLocation } from 'react-router-dom'; // ✅ NEW

const menuItems = [
  { id: 1, name: 'Ice-cream Scoop', price: 220, type: 'Ice Cream', rating: 5 ,image: 'https://images.wisegeek.com/seven-scoops-of-ice-cream-with-berries.jpg'},
  
  { id: 2, name: 'Brownie', price: 100, type: 'Dessert', rating: 4,image:'https://th.bing.com/th/id/OIP.o3Wd3dK0MwKmW1TOEvV3YgHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
  { id: 3, name: 'Cold Coffee', price: 80, type: 'Beverage', rating: 4,image:'https://img.freepik.com/premium-photo/glass-iced-coffee-pouring-glass_1106427-1257.jpg'}, 
  { id: 4, name: 'Samosa', price: 30, type: 'Snack', rating: 3,image:'https://img.freepik.com/premium-photo/indian-cuisine-samosa-delight-samosa-image-photography_1020697-107492.jpg'},
  { id: 5, name: 'Gadbad', price: 120, type: 'Ice Cream', rating: 5 ,image: 'https://www.babsprojects.com/wp-content/uploads/2021/06/gadbad-thumbnail.jpg'},
  { id: 6, name: 'Parfait', price: 130, type: 'Ice cream', rating: 4.5,image:'https://th.bing.com/th/id/R.6c95ae2dd2098dd1828c14a58f614d74?rik=biPCwA9%2b%2bGkIPA&riu=http%3a%2f%2flh4.ggpht.com%2fbgXmRJf5vj5jHhOIa4ThuceJn78or48NTon6CotN3PbuKzgmorGxQoK7qnk0n_AdaTqttKKbQXPLDpbVGRPbUQ%3ds320-c-e365&ehk=ym9FAjRswIANiTsCEMlNzhz08cqJfArsGiq%2f%2fqRO%2fJw%3d&risl=&pid=ImgRaw&r=0'},
  { id: 7, name: 'Americano Choconut', price: 180, type: 'Ice cream', rating: 4,image:'https://th.bing.com/th/id/R.c2fa82ae2925ba3605ea1aa9bd63074d?rik=7FktDX7Kx9HkWg&riu=http%3a%2f%2faroundmangalore.com%2fwp-content%2fuploads%2f2014%2f02%2fIMG_20140130_193720.jpg&ehk=4iOzs%2fOcrrFlP9dIszI7bR8J5GxuNVw8z9yiY6UJNsw%3d&risl=&pid=ImgRaw&r=0'}, 
  { id: 8, name: 'Burger', price: 30, type: 'Snack', rating: 3,image:'https://th.bing.com/th/id/OIP.VnX4V7g1FaEuRELPYHKgeAHaF6?w=223&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'}, 
  { id: 9, name: 'Pizza', price: 220, type: 'Snack', rating: 5 ,image: 'https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg'},
  { id: 10, name: 'Stir-fried Ice cream', price: 200, type: 'Dessert', rating: 4,image:'https://image.freepik.com/free-photo/stir-fried-ice-cream-rolls-freeze-pan_199620-3694.jpg'},
  { id: 11, name: 'Cold Coffee', price: 80, type: 'Beverage', rating: 4,image:'https://img.freepik.com/premium-photo/glass-iced-coffee-pouring-glass_1106427-1257.jpg'}, 
  { id: 12, name: 'Samosa', price: 30, type: 'Snack', rating: 3,image:'https://img.freepik.com/premium-photo/indian-cuisine-samosa-delight-samosa-image-photography_1020697-107492.jpg'},  
];

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const location = useLocation(); // ✅ NEW
  const searchParams = new URLSearchParams(location.search); // ✅ NEW
  const searchQuery = searchParams.get('search')?.toLowerCase() || ''; // ✅ NEW

  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('None');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = category === 'All' || item.type === category;
    const matchesFilter = filter === 'All' || item.type === filter || (filter === 'Popular' && item.rating >= 4);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery); // ✅ NEW
    return matchesCategory && matchesFilter && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === 'Price') return a.price - b.price;
    if (sort === 'Rating') return b.rating - a.rating;
    return 0;
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDetailModal(true);
  };

  const handleCustomize = () => {
    setShowDetailModal(false);
    setShowCustomizer(true);
  };

  const handleAddWithCustomization = (customization) => {
    addToCart({ ...selectedItem, customization });
    setSuccessMessage(`${selectedItem.name} added to cart successfully!`);
    setShowCustomizer(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="container mt-4">
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Category Dropdown */}
      <Form className="mb-4">
        <Row className="g-3">
          <Col md={4}>
            <Form.Label className="category-label">Category</Form.Label>
            <Form.Select
              className="category-select"
              onChange={e => setCategory(e.target.value)}
              value={category}
            >
              <option value="All">All Categories</option>
              <option value="Ice Cream">Ice Creams</option>
              <option value="Dessert">Desserts</option>
              <option value="Beverage">Beverages</option>
              <option value="Snack">Snacks</option>
            </Form.Select>
          </Col>

          <Col md={4}>
            <Form.Label className="category-label">Filter</Form.Label>
            <Form.Select
              className="category-select"
              onChange={e => setFilter(e.target.value)}
              value={filter}
            >
              <option value="All">All Items</option>
              <option value="Ice Cream">Only Ice Creams</option>
              <option value="Popular">Popular</option>
            </Form.Select>
          </Col>

          <Col md={4}>
            <Form.Label className="category-label">Sort</Form.Label>
            <Form.Select
              className="category-select"
              onChange={e => setSort(e.target.value)}
              value={sort}
            >
              <option value="None">None</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      {/* Display Items */}
      <Row>
        {sortedItems.map(item => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
              <Card.Img 
                variant="top" 
                src={item.image || `https://via.placeholder.com/300x200?text=${item.name}`} 
                style={{ height: '200px', objectFit:'fill' }} 
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
                <Card.Text>{'⭐'.repeat(item.rating)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Detail Modal */}
      <ProductDetailModal
        show={showDetailModal}
        handleClose={() => setShowDetailModal(false)}
        item={selectedItem}
        handleCustomize={handleCustomize}
      />

      {/* Customizer Modal */}
      <IceCreamCustomizer
        show={showCustomizer}
        onClose={() => setShowCustomizer(false)}
        onAdd={handleAddWithCustomization}
        basePrice={selectedItem ? selectedItem.price : 0}
      />
    </div>
  );
};

export default Menu;
