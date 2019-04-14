import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "#4BB543"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };
  
  render() {
    return (
      <div style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Random facts
        </NavLink>
        <NavLink to="/category" activeStyle={this.active}>
          By category
        </NavLink>
      </div>
    );
  }
}

export default Header;
