import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div style={{ textAlign: 'center' }}>
    <Link to="/" className="brand-logo">
      <img
        id="logoImg"
        src={require('../../images/TimelessSkinSmall.png')}
        alt="logo"
        style={{ padding: '20px', width: 200 }}
      />
    </Link>
  </div>
);

export default Logo;
