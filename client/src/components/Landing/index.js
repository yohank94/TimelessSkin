import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import Title from './Title';
import Signup from './Signup';
import Information from './Information';
import Visit from './Visit';

const Landing = ({ auth }) => (
  <div>
    <Title />
    {!{ auth }.auth && <Signup />}
    <Information />
    <Visit />
  </div>
);

Landing.propTypes = {
  auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Landing);
