import React from "react";
import "../styles/productInfo.scss";

const productInfo = (props) => {
  return (
    <div>
      <h2>Description</h2>
      <p>{props.product.description}</p>
      <h2>Specifications</h2>
      <p>Brand</p>
      <p>{props.product.brand}</p>
      <p>Item weight</p>
      <p>{props.product.weight}</p>
      <p>Dimensions</p>
      <p>
        {props.product.height}x{props.product.width}x{props.product.length}
      </p>
      <p>Item model number</p>
      <p>{props.product.modelCode}</p>
      <p>Colour</p>
      <p>{props.product.colour}</p>
    </div>
    // company info at bottom
  );
};

export default productInfo;
