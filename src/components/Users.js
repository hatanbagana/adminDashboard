import React, { useEffect } from 'react'

import Nav from "./Nav";
import "../styles/orders.css";
import { Dropdown, Table } from "react-bootstrap";
import { otherServices } from '../services/otherServices';
import { useState } from 'react';
export default function Users() {
  const [users, setUsers] = useState([])
useEffect(()=>{
otherServices.getUsers()
.then(res=> res.json())
.then(data=>setUsers(data.data))
}, [])

  return (
    <div className='orders'>
      <Nav/>
      <div className="container">

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Хэрэглэгч ID</th>
              <th>Нэр</th>
              <th>И-мэйл хаяг </th>
              <th>Бүртгүүлсэн өдөр</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, index) => (
                 <tr>
                   <td>{index+1}</td>
                   <td>{e._id}</td>
                   <td>{e.name}</td>
                   <td>{e.mail}</td>
                   <td>2022/06/06</td>
                 </tr>
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
  )
}
