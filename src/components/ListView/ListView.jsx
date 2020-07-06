import React from 'react';
import PropTypes from 'prop-types';
import './ListView.css';
import ShopItem from '../ShopItem/ShopItem';

const ListView = ({ items }) => {
  return (
    <div>
      {items.map((item, idx) => (
        <ShopItem key={idx} {...item} />
      ))}
    </div>
  );
};

ListView.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ListView;
