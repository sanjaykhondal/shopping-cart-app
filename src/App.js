import React from 'react';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-4/5">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart Application</h1>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
