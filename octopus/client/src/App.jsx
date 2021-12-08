import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Shop from "./components/shop";
import Home from "./components/home";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
});

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
    <Router>
      <Switch>
        <Route path="/Productpage">
          <ApolloProvider client={client}>
            <Query query={GET_PRODUCT}>
              {({ loading, error, data }) => {
                if (loading) return <div>Loading....</div>;
                if (error) return <div>Error....</div>;

                return <Shop product={data.product} />;
              }}
            </Query>
          </ApolloProvider>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
