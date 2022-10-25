import React from 'react';
import Products from '../products/index';
import Product from '../productsDetails/index';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/products" element={<Products />}/>
        <Route exact path={"/product/:id"} element={<Product />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;