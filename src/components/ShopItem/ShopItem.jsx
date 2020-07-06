import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="card-list__wrapper">
      <img className="card-list__img" src={img} alt="Кроссовок" />
      <div className="card-list__title">{name}</div>
      <div className="card-list__color">{color}</div>
      <div className="card-list__price">${price}</div>
      <AddToCartBtn />
    </div>
  );
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ShopItem;
