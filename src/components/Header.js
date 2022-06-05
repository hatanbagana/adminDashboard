import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
  return (
      <>
    <div className="header">
      <h3>Food Delivery</h3>
      <hr />
      <NavLink className="header__s" to="/" >
        Хянах самбар
      </NavLink>
      <NavLink className="header__s" to="/orders">
        Захиалгууд
      </NavLink>
      <NavLink className="header__s" to="/income">
        Орлого
      </NavLink>
      <NavLink className="header__s" to="/menu">
        Хоолны цэс
      </NavLink>
      <NavLink className="header__s" to="/users">
        Хэрэглэгчид
      </NavLink>
      <NavLink className="header__s" to="/delivers">
        Хүргэгчид
      </NavLink>
    </div>
     
      </>
  );
}
