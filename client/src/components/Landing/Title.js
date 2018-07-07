import React from 'react';

//Shows the contact information and purpose of the website
const Title = () => (
  <div
    className="row"
    style={{
      height: 480,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      className="title center-align"
      style={{
        width: 480,
        height: 240,
        marginTop: 120,
        backgroundColor: 'rgba(136, 136, 136, 0.4)',
        opacity: 0.9,
        borderRadius: 10
      }}
    >
      <p>
        <a href="mailto:contact@timelesskin.com">contact@timelesskin.com </a>|
        <a href="tel:2069461599"> (206) 946-1599</a>
      </p>
      <h3>Your Gateway To Anti-Aging Skin Care Products</h3>
      <button
        style={{
          width: '50%',
          backgroundColor: 'rgb(255, 214, 74)',
          borderRadius: 5,
          margin: 20
        }}
      >
        <a href="/shop" style={{ color: 'black' }}>
          Shop Now
        </a>
      </button>
    </div>
  </div>
);

export default Title;
