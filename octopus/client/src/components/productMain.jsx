import React from "react";
import "../styles/productMain.scss";

const ProductMain = (props) => {
  return (
    <section className="productMain">
      <img
        className="productMain-img"
        src={props.product.imgUrl}
        alt={props.product.name}
      />
      <div>
        <h1 className="productMain-name">{props.product.name}</h1>
        <p className="productMain-info">
          {props.product.power} // Packet of {props.product.quantity}
        </p>
      </div>
    </section>
  );
};

export default ProductMain;
