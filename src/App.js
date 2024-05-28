import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductListing from "./containers/ProductListing";

import ProductDetail from "./containers/ProductDetail";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route
              exact
              path="/product/:productid"
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route>Not found</Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
