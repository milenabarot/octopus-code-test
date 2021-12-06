import React from "react";
import "../styles/productMain.scss";

const ProductMain = (props) => {
  return (
    <div className="productMain">
      <img
        className="productMain-img"
        src={props.product.imgUrl}
        // alt="An image of a {props.product.name}"
      />
      <div>
        <h1 className="productMain-name">{props.product.name}</h1>
        <p>
          {props.product.power} // Packet of {props.product.quantity}
        </p>
      </div>
    </div>
  );
};

export default ProductMain;
