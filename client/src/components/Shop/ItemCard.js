import React from 'react';

const ItemCard = ({ node }) => {
  return (
    <div className="itemcard">
      <div className="productImg">photo</div>
      <div>
        <p>Name: {node.name}</p>
        <p>{node.desc}</p>
        <p>{node.price}</p>
      </div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
