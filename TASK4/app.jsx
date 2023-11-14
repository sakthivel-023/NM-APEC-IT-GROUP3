// Import necessary dependencies
import React, { useState } from 'react';
import './App.css'; // Import your CSS file

// Sample data for stock items
const initialStock = [
  { id: 1, name: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 20 },
  { id: 2, name: 'Product 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 30 },
  { id: 3, name: 'Product 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 25 },
];

// StockItem component to represent each item in the inventory
const StockItem = ({ item }) => (
  <div className="stock-item">
    <img src={https://via.placeholder.com/150} className="img-fluid" alt="Product Image" />
    <h4>{item.name}</h4>
    <p>Description: {item.description}</p>
    <p>Price: ${item.price}</p>
  </div>
);

// App component - main application
const App = () => {
  const [stock, setStock] = useState(initialStock);

  return (
    <div className="container mt-5">
      <h2>Stock Inventory</h2>
      <div className="row">
        {stock.map((item) => (
          <div className="col-md-4" key={item.id}>
            <StockItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
