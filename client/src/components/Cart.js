// Cart.js 


import React, { useState, useEffect } from 'react';
import Item from './Item';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);
  };

  const totalAmount = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Shopping Cart :</h2>
      <div>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <h3>Total Amount: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
