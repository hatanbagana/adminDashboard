
import { Dropdown, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export default function Order(props) {

  const [success, setSuccess] = useState("Амжилттай");
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.orderdate}</td>
      <td>{props.orderNumber}</td>
      <td>{props.user}</td>
      <td>{props.order}</td>
      <td>{props.total}</td>
      <td>{props.card}</td>
      <td>{props.phoneNumber}</td>
      <td>
        <Dropdown>
          <Dropdown.Toggle
            className={success == "Амжилттай" ? "dropdown" : "dropdown1"}
          >
            {success}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className="dropdown_item"
              href="#/action-1"
              onClick={() => setSuccess("Амжилттай")}
            >
              Амжилттай
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown_item"
              href="#/action-2"
              onClick={() => setSuccess("Хүлээн авсан")}
            >
              Хүлээн авсан
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
