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
  },
  {
    item: {
      name: 'Item 3',
      desc: `Item 3's desc`,
      price: `$92.00`
    }
  },
  {
    item: {
      name: 'Item 4',
      desc: `Item 4's desc`,
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginLeft: '10%',
        marginRigth: '10%',
        maxWidth: '80%'
      }}
    >
      {renderCards()}
    </div>
  </div>
);

export default Shop;
