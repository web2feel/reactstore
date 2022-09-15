import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
//import productData from "./data.json"
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const siteName = "React Shop";

  const [cart, setCart] = useState([]);

  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    let res = await fetch("http://localhost:4000/products");
    let data = await res.json();
    setProductData(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="appWrapper">
      <Header name={siteName} />

      <Main>
        <Routes>
          <Route path="/" element={
              <Home products={productData} cart={cart} setCart={setCart} />
            }
          />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="product/:id" element={<ProductPage />}/>
        </Routes>
      </Main>
      <Footer name={siteName} />
    </div>
  );
};

export default App;
