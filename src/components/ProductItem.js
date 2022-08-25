import React from "react";

function ProductItem({name, price, id}) {   
  return (
    <div className="productItem">
      <div className="itemName">{name}</div>
      <div className="itemPic">
        <img src={`https://picsum.photos/id/${id}/600/400`} alt="" />
      </div>
      <div className="itemMeta">
        <div className="itemPrice">$ {price}</div>
        <button className="cartButton">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
