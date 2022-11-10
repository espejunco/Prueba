import React from "react";
import Products from "./containers/Products";
import Product from "./containers/ProductsDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path={"/product/:id"} element={<Product />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
