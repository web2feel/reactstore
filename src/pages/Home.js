import React from "react";
import ProductGallery from "../components/ProductGallery";
function Home({ products, cart, setCart }) {
  return (
    <>
      <div className="productHome">
        <ProductGallery products={products} cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default Home;
