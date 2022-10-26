import React from 'react';
import Products from '../products/index';
import Product from '../productsDetails/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path={"/product/:id"} element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;