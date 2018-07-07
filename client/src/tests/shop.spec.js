require('babel-polyfill');
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import Shop from '../components/Shop';
import ItemCard from '../components/Shop/ItemCard';
import { Button } from '../components/CommonComps';

Enzyme.configure({ adapter: new Adapter() });

describe('Shop', () => {
  const wrapper = shallow(<Shop />);

  it('Should have item cards', () => {
    expect(wrapper.find(ItemCard)).to.be.an('object');
  });

  it('Should have a title', () => {
    expect(wrapper.find('DivTitle')).to.have.length(1);
  });

  it('Should have props', () => {
    expect(wrapper.find('props'));
  });
});

describe('Item Cards', () => {
  const wrapper = shallow(<ItemCard />);

  it('should have at least an image', () => {
    expect(wrapper.find('img')).to.have.length.at.least(1);
  });

  it('should have an add to cart button', () => {
    expect(wrapper.find('.shop-btn')).to.have.length(1);
  });
});

describe('Add To Cart Button', () => {
  it('should be a button', () => {
    expect('button');
  });
});
