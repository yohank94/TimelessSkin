import React from 'react';

import { DivTitle } from '../CommonComps';

const imageStyle = {
  width: '100%',
  minWidth: 200,
  height: 220,
  padding: 30,
  maxWidth: 500
};

const visitTitle = 'To Get Your Optimum Result, Visit Our Local Partners';

const renderImage = src => (
  <div className="col s6">
    <a href={`https://${src.split('/')[2]}`}>
      <img src={src} style={imageStyle} />
    </a>
  </div>
);

const Visit = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
  >
    <DivTitle title={visitTitle} />
    <div className="row" style={{ width: '90%' }}>
      {renderImage(
        'https://elitemed-spa.com/wp-content/uploads/2018/02/fullsizeoutput_76c.jpeg'
      )}
      {renderImage(
        'https://truskinandbodies.com/wp-content/uploads/2018/02/fullsizeoutput_748-768x419.jpeg'
      )}
    </div>
  </div>
);

export default Visit;
