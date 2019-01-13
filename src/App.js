import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloclient";
import Home from "./Home";
import Table from "./Table";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <React.Fragment>
            <Route exact={true} path={"/"} component={Table} />
            <Route path={"/1"} component={Home} />
          </React.Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
