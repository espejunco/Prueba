import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./containers/productsDetails";
import Products from "./containers/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="Products" element={<Products />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);