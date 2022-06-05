import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import '../styles/orders.css'
import { Dropdown, Table } from 'react-bootstrap';
export default function Orders() {
  const [data, setData] = useState([])
  const [success, setSuccess] = useState('Амжилттай')

  useEffect(()=>{
    fetch('http://localhost:3000/api/users').then(data => data.json())
    .then(res=> setData(res.data))
  }, [])
  console.log(data);
  return (
    <div className='orders'>
      <Nav/>
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
              <>
              
              <tr>
                <td>{index+1}</td>
                <td>{e.orderdate}</td>
                <td>{e.orderNumber}</td>
                <td>{e.user}</td>
                <td>{e.order}</td>
                <td>{e.total}</td>
                <td>{e.card}</td>
                <td>{e.phoneNumber}</td>
                <td><Dropdown>
  <Dropdown.Toggle className={success=="Амжилттай"? "dropdown" : "dropdown1"} >
 { success}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item className='dropdown_item' href="#/action-1" onClick={()=>setSuccess('Амжилттай')}>Амжилттай</Dropdown.Item>
    <Dropdown.Item className='dropdown_item' href="#/action-2" onClick={()=>setSuccess('Хүлээн авсан')}>Хүлээн авсан</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></td>
              </tr>

              </>
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
