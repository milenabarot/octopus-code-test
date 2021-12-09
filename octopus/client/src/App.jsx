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
        <Route path="/productpage">
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

/*******TO DO - Next steps*******/

// •	I would add local storage to store the basket contents, however this would only
//    work if I also added functionality to empty the basket, otherwise when the page is refreshed the
//    quantity would still be there with no ability to empty the basket and start fresh.
// •	Functionality to empty and edit the basket – could be part of a drop down menu/pop out
//    that appears when you click / hover on the basket icon.
// •	I would add mixins, for when there is repeated styling across the files.
// •	Could also use the React Toastify library to signify when an item has been added to the basket.
// •	Styling of the price that is pulled through as a prop. I would split the price up, put
//    them in separate p tags & apply a smaller font size to the ‘99’ part of the number.
