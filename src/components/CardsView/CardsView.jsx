import React from 'react';
import PropTypes from 'prop-types';
import './CardsView.css';
import ShopCard from '../ShopCard/ShopCard';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view__wrapper">
      {cards.map((item, idx) => (
        <div className="cards-view__card-wrapper">
          <ShopCard key={idx} {...item} />
        </div>
      ))}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardsView;
