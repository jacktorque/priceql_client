import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./query";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loding, data, error }) => {
      if (loding) return "loding";
      if (error) return "error";
      return "aaa";
    }}
  </Query>
);

export default Home;
