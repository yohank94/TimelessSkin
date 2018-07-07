import React from 'react';
import { connect } from 'react-redux';

import { DivTitle } from '../CommonComps';
import ItemCard from './ItemCard';

const Items = [
  {
    item: {
      name: 'Item 1',
      desc: `Item 1's desc`,
      price: `$85.00`
    }
  },
  {
    item: {
      name: 'Item 2',
      desc: `Item 2's desc`,
      price: `$92.00`
    }
  }
];

const renderCards = () => {
  return Items.map((node, index) => {
    return <ItemCard node={node.item} key={index} />;
  });
};

const Shop = () => (
  <div>
    <DivTitle title="Shop" />
    {renderCards()}
  </div>
);

export default Shop;
