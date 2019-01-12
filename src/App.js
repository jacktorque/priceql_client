import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import {ApolloProvider} from "react-apollo"
import client from "./apolloclient"
import Home from "./Home"
import Details from "./Details"

class App extends Component {
  render() {
    return (
<ApolloProvider client={client}>
<Router>
  <React.Fragment>
<Route exact={true} path={"/"} component={Home} />
<Route path={"/details/:Id"} component={Details} />
</React.Fragment>
</Router>
  </ApolloProvider>
    );
  }
}

export default App;
