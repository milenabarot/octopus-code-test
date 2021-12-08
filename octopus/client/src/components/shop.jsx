import React, { useState } from "react";
import Nav from "../components/nav";
import Cart from "../components/cart";
import ProductInfo from "../components/productInfo";
import ProductMain from "./productMain";
import "../styles/home.scss";

const Shop = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [basket, setBasket] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    setBasket(basket + quantity);
    setQuantity(1);
  };

  return (
    <main className="shop">
      <Nav basket={basket} product={product} />
      <ProductMain product={product} />
      <Cart
        addToCart={addToCart}
        increment={increment}
        decrement={decrement}
        basket={basket}
        product={product}
        quantity={quantity}
      />
      <ProductInfo product={product} />
    </main>
  );
};

export default Shop;
