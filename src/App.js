import React from 'react';
import Routes from './Route';
import './App.css';
import  ProductContextProvider  from './Context/ProductContext';



function App() {
  return (
    <div>
      <ProductContextProvider>
      <Routes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
