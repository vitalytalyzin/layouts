import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.css';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="card__wrapper">
      <div className="product-info__title">
        {name}
      </div>
      <div className="product-info__color">
        {color}
      </div>
      <img className="product-info__img" src={img} alt="Кроссовок" />
      <div className="product-info__price-section">
        <div className="product-info__price">${price}</div>
        <AddToCartBtn />
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ShopCard;
