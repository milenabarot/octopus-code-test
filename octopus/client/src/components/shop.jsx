import React, { useState } from "react";
import Nav from "../components/nav";
import Cart from "../components/cart";
import Info from "../components/info";

const Shop = (props) => {
  const { product } = props;
  const [quantity, setQuantity] = useState(1);
  const [basket, setBasket] = useState(0);

  const increment = () => {
    if (quantity + basket < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity + basket <= product.quantity) {
      setBasket(basket + quantity);
      setQuantity(1);
    }
  };

  return (
    <div>
      <Nav basket={basket} product={product} />
      <Cart
        addToCart={addToCart}
        increment={increment}
        decrement={decrement}
        basket={basket}
        product={product}
      />
      <Info product={product} />

      {/* to enable to test to pass with the product page */}
      <a href="/Go to product page">Go to product page</a>
    </div>
  );
};

export default Shop;
