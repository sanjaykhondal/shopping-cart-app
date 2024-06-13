import React, { useState } from 'react';

function AddItemForm({ addItem, setShowForm }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      addItem({ name, price: parseFloat(price) });
      setName('');
      setPrice('');
      setShowForm(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded w-full md:w-1/2 mx-auto">
      <div className="mb-2">
        <label className="block mb-1">Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </form>
  );
}

export default AddItemForm;
