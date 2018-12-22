import React from 'react';

const ItemCard = ({ node }) => {
  return (
    <div
      className="itemcard"
      style={{ height: 400, width: 360, border: '5px solid red', margin: 10 }}
    >
      <div className="productImg" style={{ padding: 50, textAlign: 'center' }}>
        photo
      </div>
      <div style={{ padding: 50 }}>
        <p>Name: {node.name}</p>
        <p>{node.desc}</p>
      </div>
      <div>
        <span style={{ padding: 50 }}>{node.price}</span>
        <span style={{ padding: 50 }}>
          <button>Add To Cart</button>
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
