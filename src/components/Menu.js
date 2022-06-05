import React, { useState } from "react";
import Nav from "./Nav";
import "../styles/menu.css";
import { Table } from "react-bootstrap";
import { otherServices } from "../services/otherServices";
import { useEffect } from "react";
export default function Menu() {
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState("");



useEffect(()=>{
    otherServices.getAllFood()
    .then(res => res.json())
    .then(data => setFood(data.data))
}, [])

function  searchHandle(event){
    // setSearch(e.target.value)



    // removePlayer = (id) => {
    //     this.setState((prevState) => {
    //       return { player: prevState.player.filter((p) => p.id !== id) };
    //     });
    //   };


    const filtered = food.filter((e, i)=>{
       return event.target.value!== e.name[i]
    })
    console.log(filtered);
    setFood(filtered)
}

  return (
    <div className="menu">
      <Nav />
      <div className="container">
        <h2>Хоолны цэс</h2>
        <div className="form">
          <input
            type="search"
            placeholder="Хайх"
            className="search"
            onChange={searchHandle}
          />
          <button className="add">Хоол нэмэх</button>
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Зураг</th>
              <th>Хоолны  нэр</th>
              <th>Тайлбар</th>
              <th>Порц</th>
              <th>Үнэ (₮)</th>
              <th>Категори</th>
              <th></th>
            </tr>
          </thead>  
          <tbody>
          {food.map((e, index) => (
              <>
              
              <tr>
                  <td>{index+1}</td>
                  <td><img className="img" src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${e.image}`} alt="" /></td>
                  <td>{e.name}</td>
                  <td>Орц: {e.ingredients}</td>
                  <td>{e.portion} Хүн</td>
                  <td>{e.price}₮</td>
                  <td>{e.category}</td>
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
  );
}
