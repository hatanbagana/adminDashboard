import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../styles/orders.css";
import { Dropdown, Table } from "react-bootstrap";
import Order from "./Order";
export default function Orders() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/orders")
      .then((data) => data.json())
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="orders">
      <Nav />
      <div className="container">
        <div className="buttons">
          <button>Амжилттай</button>
          <button>Захиалга нэмэх</button>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Он сар өдөр</th>
              <th>Захиалга #</th>
              <th>Хэрэглэгч </th>
              <th>Захиалга</th>
              <th>Нийт дүн</th>
              <th>Төлбөр</th>
              <th>Утас</th>
              <th>Төлөв</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
                  <Order index={index} orderdate={e.orderdate} orderNumber={e.orderNumber} user={e.user} order={e.order}  total={e.total} card={e.card} phoneNumber={e.phoneNumber}   />
            ))}

            {/* <tr>
              <td>1</td>
              {food.map((e, index) => (
                <td key={index}>{e.category}</td>
              ))}
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
