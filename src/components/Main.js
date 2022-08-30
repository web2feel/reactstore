import React from 'react'
import ProductGallery from './ProductGallery'
function Main({products, cart, setCart}) {
  return (
    <div className="appMain">
        <ProductGallery products={products} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Main