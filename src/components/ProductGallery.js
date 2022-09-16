import React,{useContext} from "react";
import ProductItem from "./ProductItem";
import {AppContext} from "../context/AppContext"
function ProductGallery() {

    const {state} = useContext(AppContext)

    if(state.products_loading){
      return(
        <h1>Products Loading</h1>
      )
    }
    return (
    <div className="productGallery">    
      {
        state.products.map((product) => {
           return <ProductItem key={product.id} {...product} />
        })
      }     
    </div>
  );
}

export default ProductGallery;
