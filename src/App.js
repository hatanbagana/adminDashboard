
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Main from './Main';


function App() {
  const [data, setData] = useState([])

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


function clicked(){
  const requestOptions = {
   "id":"6299be13bbb43caf6d1199b8",
    "date": 20220603,
    "orderNumber": 3,
    "user": "Hatnaa",
    "order": "Brocly",
    "total": 34500,
    "card": "Card",
    "phoneNumber": 99097733
};
  postData('http://localhost:3000/api/users', requestOptions)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

   
}

useEffect(()=>{
  fetch('http://localhost:3000/api/users').then(data => data.json())
  .then(res=> setData(res.data))
}, [])
function getReq(params) {
  
data.map(e=> console.log(e))
  console.log(data);
}

function putreq()
{
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: { "id":"6299be13bbb43caf6d1199b8",
    "date": 20220603,
    "orderNumber": 3,
    "user": "Hatnaa",
    "order": "Brocly",
    "total": 34500,
    "card": "Card",
    "phoneNumber": 99097733}
};
fetch('http://localhost:3000/api/users', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data) );
}



  return (
    <>
    {localStorage.getItem("user")? <Main/> :   <Login/>}

    <button onClick={clicked}>asd</button>
    <button onClick={getReq}>req</button>
    <button onClick={putreq}>put</button>

    {data.map(e=>{
      return(
        <>
          <p>{e.pollName}</p>
        </>
      )
    })}
    </>
  );
}

export default App;
