// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

const StockItem = ({ item }) => (
  <div className="stock-item">
    <img src={https://via.placeholder.com/150} className="img-fluid" alt="Product Image" />
    <h4>{item.name}</h4>
    <p>Description: {item.description}</p>
    <p>Price: ${item.price}</p>
  </div>
);

const App = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setStock(data.stock))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
