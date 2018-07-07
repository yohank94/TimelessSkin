import React from 'react';

import { DivTitle } from '../CommonComps';

const renderDivs = ({ className, node }) => (
  <div className={className} style={{ textAlign: 'center' }}>
    <h5>{node}</h5>
  </div>
);

const Testimonials = () => (
  <div id="testimonials" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
    <DivTitle title="Testimonials" />
    <div className="row" style={{ width: '80%' }}>
      {renderDivs({ className: 'col s4', node: 'Picture goes here' })}
      {renderDivs({ className: 'col s8', node: 'Testimonies goes here' })}
    </div>
  </div>
);

export default Testimonials;
