require('babel-polyfill');
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import Button from '../components/CommonComps/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('is actually a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).to.be.length(1);
  });

  it('should have text', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.text()).to.not.have.length(0);
  });
});
