import React from "react";
import { Route } from "react-router-dom";
import Facts from "../containers/facts";
import Category from "../containers/category";
import Header from "../components/header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Facts} />
        <Route path="/category" component={Category} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
