import React from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/header.css";

import { useUser } from "../contexts/userContext";
export default function Nav() {
  // const [user, setUser] = useUser();

  function handleSelect(e){

    if (e === "/"){
      // setUser(null)
      localStorage.clear()
    }
  }
  return (
    <div className="nav">
      <div className="login">
        {" "}
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle className="sda" variant="outline-none" id="dropdown-basic">
            Admin
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/">Гарах</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
