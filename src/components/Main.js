import React from 'react'
import Cart from './Cart'
import ProductGallery from './ProductGallery'
function Main({products, cart, setCart}) {
  return (
    <div className="appMain">
        <ProductGallery products={products} cart={cart} setCart={setCart}/>
        <Cart cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Main