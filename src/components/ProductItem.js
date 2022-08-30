import React from "react";
import {currencyFormatter} from "../util"

function ProductItem({ id,title,price,image,cart,setCart }) { 

  const cartHandler = () => {

    setCart((prevState) => {
      let cartProduct = {
        id,
        title,
        price,
        image
      }
      return [...prevState, cartProduct]
    })

 

  }

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>        
        </div>
      <div className="itemPic">
        <img src={`/images/${image}`} alt=""/>
      </div>
      <div className="itemMeta">
        <div className="itemPrice"> {currencyFormatter(price)} </div>
        <button className="cartButton" onClick={cartHandler}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
