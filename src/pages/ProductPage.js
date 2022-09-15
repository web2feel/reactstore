import React, { useState, useEffect } from "react";
import { currencyFormatter } from "../util"
import { useParams } from "react-router-dom";
function ProductPage() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();
  console.log(product);
  useEffect(() => {
    const getProduct = async () => {
      let res = await fetch(`http://localhost:4000/products/${id}`);
      let data = await res.json();
      setProduct(data);
    };
    getProduct();
  }, []);

  return (
    <div className="singleProduct">
      <img src={`/images/${product?.image}`} alt="" />
      <div>
        <h1>{product?.title}</h1>
        <h3>{product && currencyFormatter(product?.price)}</h3>
      </div>
    </div>
  );
}

export default ProductPage;
