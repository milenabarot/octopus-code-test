import React from "react";
import "../styles/productInfo.scss";

const productInfo = (props) => {
  return (
    <div className="productInfo">
      <div className="productInfo-description">
        <h2>Description</h2>
        <p>{props.product.description}</p>
      </div>
      <div className="productInfo-specification">
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
      <div className="productInfo-companyInfo">
        Octopus Energy Ltd is a company registered in England and Wales.
        Registered number: 09263424. Registered office: 33 Holborn, London, EC1N
        2HT. Trading office: 2nd Floor, UK House, 164-182 Oxford Street, London
        W1D 1NN
      </div>
    </div>
  );
};

export default productInfo;
