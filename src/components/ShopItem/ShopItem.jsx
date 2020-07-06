import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div>
      List of products
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
