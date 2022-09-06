import React from "react";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util";
function Cart({ cart, setCart }) {
    
  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (cart.length ? (
    <div className="cart">
      <h3>Cart</h3>
      <div className="cartList">
        { cart.map((cartProduct) => {
          return <CartItem key={cartProduct.id} {...cartProduct} setCart={setCart} />;
        }) }
      </div>

      <div className="cartTotal">Total - {currencyFormatter(subTotal)}</div>

      <div className="cartFooter">
        <button onClick={clearCart} className="clear">
          Clear Cart
        </button>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  ) : (
    <div className="cart">
      <h3>Cart</h3>
      <p>Please add Products to the cart</p>
    </div>
  ));
}

export default Cart;
