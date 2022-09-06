import React from "react";
import { currencyFormatter } from "../util";
function CartItem({ id, title, image, price, count, setCart }) {
  
  const increaseCount = (_id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (_id === item.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const decreaseCount = (_id) => {
    if (count > 1) {
      setCart((prev) => {
        return prev.map((item) => {
          if (_id === item.id) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
      });
    } else {
        setCart((prev) => {
            return prev.filter(item => item.id !== _id)
        })
    }
  };

  return (
    <div className="cartItem">
      <div className="itemPic">
        <img src={`/images/${image}`} alt="" />
      </div>
      <div className="itemInfo">
        <p>{title}</p>
        <div className="cartUpdater">
          <button onClick={() => decreaseCount(id)}>-</button>
          <div>{count}</div>
          <button onClick={() => increaseCount(id)}>+</button>
        </div>
      </div>
      <div className="itemPrice">{currencyFormatter(price)}</div>
    </div>
  );
}

export default CartItem;
