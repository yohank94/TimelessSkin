import React from 'react';

const buttonStyle = {
  position: 'relative',
  width: 240,
  height: 60,
  backgroundColor: 'rgb(123,132,12)',
  borderRadius: 16,
  fontSize: '1em',
  fontFamily: 'Sans-Serif',
  padding: '10px 20px 10px 20px',
  color: '#092406',
  background: '#f5e531'
};

const Button = ({ icon, node }) => (
  <div>
    <button style={buttonStyle}>
      <div
        style={{
          position: 'absolute',
          top: '10%',
          height: 60,
          margins: 0,
          textAlign: 'left',
          padding: '0 24px',
          display: 'block',
          fontSize: '1.5em',
          fontFamily: 'Georgia',
          lineHeight: 2,
          letterSpacing: '0.0625em'
        }}
      >
        {icon && (
          <i
            className="material-icons"
            style={{ paddingRight: 16, verticalAlign: 'sub' }}
          >
            {icon}
          </i>
        )}
        {node}
      </div>
    </button>
  </div>
);

export default Button;
