import React, { useState } from 'react';
import './Store.css';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import { products } from './products';
import ListView from '../ListView/ListView';

const Store = () => {
  const [productView, setProductView] = useState('view_list');

  return (
    <div className="wrapper">
      <div className="header">
        <IconSwitch
          icon={productView}
          onSwitch={setProductView}
        />
      </div>
      <div className="products__wrapper">
        {productView === 'view_list' ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    </div>
  );
};

export default Store;
