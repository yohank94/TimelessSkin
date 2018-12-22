import React from "react";
import { NavLink } from "react-router-dom";
import { SideNav, SideNavItem, Button, Icon } from "react-materialize";
import $ from "jquery";

import { HEADER_MENU } from "./index";

const renderList = () =>
  HEADER_MENU.map((menu, index) => {
    const path = menu === "Home" ? "/" : menu.replace(" ", "").toLowerCase();
    return (
      <NavLink
        to={path}
        style={{
          width: 300,
          color: "rgb(140, 116, 36)",
          display: "flex",
          flexDirection: "column",
          height: 50,
          padding: 30,
          justifyContent: "center"
        }}
        key={index}
      >
        {menu}
      </NavLink>
    );
  });

const renderUserView = auth => {
  const userName =
    auth == null
      ? "Welcome, Guest"
      : `${auth[0].firstname} ${auth[0].lastname}`;
  const email =
    auth == null ? (
      <a href="/login" style={{ color: "white" }}>
        Login
      </a>
    ) : (
      `${auth[0].email}`
    );
  return (
    <SideNavItem
      userView
      user={{
        name: userName,
        email: email,
        background: require("../../images/TimelessSkinSmall.png")
      }}
      className="blue"
      style={{ width: 310, height: "auto" }}
    />
  );
};

const Dropdown = ({ auth }) => (
  <div className="row hide-on-large-only">
    <div className="nav col s1">
      <SideNav
        trigger={
          <Button style={{ backgroundColor: "rgb(140, 116, 36)" }}>Menu</Button>
        }
        options={{
          menuWidth: 300,
          closeOnClick: true
        }}
      >
        {renderUserView(auth)}
        {renderList()}
      </SideNav>
    </div>
  </div>
);

export default Dropdown;
