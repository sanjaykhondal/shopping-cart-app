import React, { useState } from 'react';
import AddItemForm from './AddItemForm';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="w-4/5 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      <ul className="mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2 p-2 border rounded">
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          Add Item
        </button>
      </div>
      {showForm && <AddItemForm addItem={addItem} setShowForm={setShowForm} />}
    </div>
  );
}

export default ShoppingCart;
