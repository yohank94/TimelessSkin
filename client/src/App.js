import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import * as actions from "./actions";
import * as comp from "./components";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <comp.Header />
          <Switch>
            <Route exact path="/" component={comp.Landing} />
            <Route exact path="/aboutus" component={comp.AboutPage} />
            <Route exact path="/contactus" component={comp.ContactPage} />
            <Route exact path="/shop" component={comp.Shop} />
            <Route exact path="/login" component={comp.LoginPage} />
          </Switch>
          <comp.Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
