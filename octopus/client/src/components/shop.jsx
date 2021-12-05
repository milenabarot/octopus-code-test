import React, { useState } from "react";

const Shop = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(0);

  return <div>{product.name}</div>;
};

export default Shop;
