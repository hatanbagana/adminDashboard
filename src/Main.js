import React from 'react'
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Delivers from './components/Delivers';
import Header from './components/Header'
import Income from './components/Income';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Orders from './components/Orders';
import Users from './components/Users';
import './styles/header.css'

export default function Main() {
  return (
      <div className='main'>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"  element={<Dashboard/>}></Route>
                <Route path="/orders" element={<Orders/>} ></Route>
                <Route path="/income" element={<Income/>} ></Route>
                <Route path="/menu" element={<Menu/>} ></Route>
                <Route path="/users" element={<Users/>} ></Route>
                <Route path="/delivers" element={<Delivers/>} ></Route>
            </Routes>
        </BrowserRouter>
      </div>
  )
}
