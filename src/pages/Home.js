import React from "react";
import ProductGallery from "../components/ProductGallery";
import Cart from "../components/Cart";
function Home({ products, cart, setCart }) {
  return (
    <>
      <div className="productHome">
        <ProductGallery products={products} cart={cart} setCart={setCart} />
        {/* <Cart cart={cart} setCart={setCart} /> */}
      </div>
    </>
  );
}

export default Home;
