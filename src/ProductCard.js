import React from "react";
import "./productCard.css";

const ProductCard = (props) => {
  return (
      <div> 
        <img src={props.img}alt=""/>
        <h1>{props.productName}</h1>
      </div>
  );
};
export default ProductCard;