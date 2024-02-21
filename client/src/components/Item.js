// Item.js secrtion


import React from 'react';

const Item = ({ item, onQuantityChange }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
      />
    </div>
  );
};

export default Item;
