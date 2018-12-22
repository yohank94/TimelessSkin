import React from "react";
import { Link, NavLink } from "react-router-dom";

import { HEADER_MENU } from "./index";

const renderContent = auth => {
  switch (auth) {
    case null:
      return <a href="/login">Login</a>;
    default:
      return <p>Hi, {auth[0].firstname}</p>;
  }
};

const renderList = () =>
  HEADER_MENU.map((menu, index) => {
    const path = menu === "Home" ? "/" : menu.replace(" ", "").toLowerCase();
    return (
      <li key={`list${index}`}>
        <NavLink to={path} className="navlink" activeClassName="active" exact>
          <span className={`fa fa-${menu.replace(" ", "").toLowerCase()}`}>
            {menu}
          </span>
        </NavLink>
      </li>
    );
  });

const List = ({ auth }) => (
  <div className="nav hide-on-med-and-down">
    <ul>
      {renderList()}| <li>{renderContent(auth)}</li>
    </ul>
  </div>
);

export default List;
