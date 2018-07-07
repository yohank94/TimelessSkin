import React from 'react';
import _ from 'lodash';
import './index.css';

const cardtitle = [
  'Stem Cell Serum',
  'Encapsulated Retinol Complex',
  'Hyaluronic Acid'
];
const cardContent = [
  'Apple stem cell serum creates more supple skin, reducing fine lines and wrinkles. It also protects the skin against oxidative stress, repairing and improving its elasticity. For enhanced results, combine this product with non-surgical skin tightening treatments that will boost your natural collagen.',
  'Retinol can act intuitively to target individual imperfections. It can also improve the appearance of uneven tone and texture, and diminish the look of expression lines and wrinkles. When paired with micro-needling, this product will reduce deep-scarring and discoloration.',
  '100% pure Hyaluronic Acid Serum is clinically proven for hydration and anti-aging benefits. It can draw moisture from the environment as your skin absorbs it, helping your face stay hydrated all day long. You can pair this with any of our products to give yourself a nice, dewy, glowing look.'
];

const toMapArray = _.zip(cardtitle, cardContent);

const IMAGESTYLE = {
  borderRadius: '50%',
  width: 250,
  height: 250
};

const renderImage = ({ title }) => (
  <img
    src={require(`../../images/${title}-small.jpg`)}
    style={IMAGESTYLE}
    alt={`${title}.jpg`}
  />
);

const infoCard = ({ title, text }) => (
  <div
    style={{
      width: 'auto',
      padding: '0 5%'
    }}
  >
    {renderImage({ title })}
    <h5>{title}</h5>
    <p>{text}</p>
  </div>
);

const renderDiv = ({ type, ...rest }) => (
  <div className={type} style={{ textAlign: 'center', width: 'auto' }}>
    {infoCard(rest)}
  </div>
);

/**
 * @param {array} toMapArray Array whose content is mapped to the divs.
 * @param {boolean} isWindowSmall Determines div type to be used based on window size.
 */
const renderContent = ({ toMapArray, isWindowSmall }) =>
  toMapArray.map(([title, text], index) => (
    <div key={index}>
      {isWindowSmall
        ? renderDiv({ type: 'section', title, text })
        : renderDiv({ type: 'col s4', title, text })}
      {isWindowSmall && <div className="divider" />}
    </div>
  ));

const Information = () => (
  <div className="info" style={{ backgroundColor: 'rgb(246, 246, 246)' }}>
    <div className="infoHeader" style={{ textAlign: 'center', paddingTop: 20 }}>
      <h4>
        <span>Best Kept Secret To A New You</span>
      </h4>
    </div>
    <div
      className="row hide-on-med-and-down"
      style={{
        width: '80%',
        height: 'auto',
        display: 'flex',
        flexFlow: 'row no-wrap',
        justifyContent: 'center'
      }}
    >
      {renderContent({ toMapArray, isWindowSmall: false })}
    </div>
    <div
      className="hide-on-large-only"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {renderContent({ toMapArray, isWindowSmall: true })}
    </div>
  </div>
);

export default Information;
