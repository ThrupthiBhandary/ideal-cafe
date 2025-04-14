import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import PopularDishes from '../components/PopularDishes';
import Testimonials from '../components/Testimonials';
import Offers from '../components/Offers';
import IceCreamOfTheDay from '../components/IceCreamOfTheDay';

const Home = () => {
  return (
    <div className="container">
      <HeroCarousel />
      <IceCreamOfTheDay />
      <PopularDishes />
      <Testimonials />
      <Offers />
    </div>
  );
};

export default Home;