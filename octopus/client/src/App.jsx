import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Shop from "./components/shop";

const GET_PRODUCT = gql`
  query {
    product(productId: 1) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      modelCode
      colour
      imgUrl
    }
  }
`;

const App = () => {
  return (
    <Query query={GET_PRODUCT}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading....</div>;
        if (error) return <div>Error....</div>;

        return <Shop product={data.product} />;
      }}
    </Query>
  );
};

export default App;
