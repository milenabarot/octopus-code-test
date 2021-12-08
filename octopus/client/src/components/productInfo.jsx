import React from "react";
import "../styles/productInfo.scss";

const productInfo = (props) => {
  return (
    <section className="productInfo">
      <div className="productInfo-description">
        <h2>Description</h2>
        <p>{props.product.description}</p>
      </div>
      <div className="productInfo-specifications-wrap">
        <h2>Specifications</h2>
        <div className="productInfo-specifications">
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
      </div>
      <p className="productInfo-companyInfo">
        Octopus Energy Ltd is a company registered in England and Wales. <br />
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
      </p>
    </section>
  );
};

export default productInfo;
