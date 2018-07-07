//Header.js
//Yohanes Kurnia -- contact yohanes.kurnia@hotmail.comp
//Header component for Timeless Skin that includes brand logo
//and renders menu.

//Need to automate HEADERMENU by adding to db.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import './index.css';
import Dropdown from './Dropdown';
import Logo from './Logo';
import List from './List';
import { showMenu } from '../../actions';

export const HEADER_MENU = ['Home', 'About Us', 'Shop', 'Contact Us', 'Blog'];

const Header = ({ auth }) => (
  <div
    style={{
      padding: 10,
      borderBottom: '1px solid rgba(136, 136, 136, 0.2)'
    }}
  >
    <Logo />
    <List auth={auth} />
    <Dropdown auth={auth} />
  </div>
);

Header.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
