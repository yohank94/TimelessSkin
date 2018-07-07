import React from 'react';
import _ from 'lodash';

import { DivTitle } from '../CommonComps';

const cardTitle = ['Our Mission', 'Our Product'];
const cardText = [
  'Our team of talented and experienced medical professionals combine advances in medical technology and our naturally-derived formulas to give you your desired skin. We strive to provide a variety of products and to be a one-stop-shop experience. It is our responsibility to keep our consumers current with the latest product advancements. As skin care professionals, we aim to leave you feeling your best and more confident.',
  'With a variety of products, we make it easy to customize your own personal skin care routine. All of the products we provide are medical grade, all-natural, safe and gentle on every skin type. Our all-natural ingredients include stem cells, peptides, and hyaluronic acid. Properly formulated, these products will stimulate your natural collagen growth. We pride ourselves on our cutting-edge formulas and expertise on skin.'
];

const aboutTitle = 'About Us';

const toMapArray = _.zip(cardTitle, cardText);

const infoCard = ({ title, text }) => {
  return (
    <div
      style={{
        width: 'auto',
        padding: '0 5%'
      }}
    >
      <p>image goes here</p>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

const renderDiv = ({ type, ...cardProps }) => (
  <div className={type} style={{ textAlign: 'center', width: 'auto' }}>
    {infoCard(cardProps)}
  </div>
);

const renderContent = ({ toMapArray, isSmall }) =>
  toMapArray.map(([title, text], index) => (
    <div key={index}>
      {isSmall
        ? renderDiv({ type: 'section', title, text })
        : renderDiv({ type: 'col s6', title, text })}
      {isSmall && <div className="divider" />}
    </div>
  ));

const About = () => (
  <div>
    <DivTitle title={aboutTitle} />
    <div
      className="row hide-on-med-and-down"
      style={{ width: '80%', display: 'flex', flexDirection: 'row' }}
    >
      {renderContent({ toMapArray, isSmall: false })}
    </div>
    <div className="row hide-on-large-only" style={{ width: '80%' }}>
      {renderContent({ toMapArray, isSmall: true })}
    </div>
  </div>
);

export default About;
