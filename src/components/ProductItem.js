import React, { useMemo, useContext } from "react";
import { currencyFormatter } from "../util";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function ProductItem({ id, title, price, image }) {
  const { cart, setCart } = useContext(AppContext);

  const formattedPrice = useMemo(() => currencyFormatter(price), [price]);
  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  let productCount = cart.find((item) => item.id === id)?.count;

  const countHandler = (_id) => {
    let itemIndex = cart.findIndex((item) => item.id === _id);
    setCart((prev) => {
      return prev.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    });
  };

  const cartHandler = () => {
    setCart((prevState) => {
      let cartProduct = {
        id,
        title,
        price,
        image,
        count: 1,
      };
      return [...prevState, cartProduct];
    });
  };

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>
      </div>
      <div className="itemPic">
        <Link to={`/product/${id}`}>
          <img src={`/images/${image}`} alt="" />
        </Link>
      </div>
      <div className="itemMeta">
        <div className="itemPrice"> {formattedPrice} </div>

        {isInCart(id) ? (
          <button className="cartButton" onClick={() => countHandler(id)}>
            {productCount} Added to Cart{" "}
          </button>
        ) : (
          <button className="cartButton" onClick={cartHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
