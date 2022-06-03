import React, { useState } from 'react'
import '../styles/login.css'
import { userService } from "../services/userService";

export default function Login() {
    const [user, setUser] = useState()
    function handleSubmit(e) {
        e.preventDefault();
        userService.loginUser({
          email: e.target[0].value,
          password: e.target[1].value,
        }).then(res => res.json())
        .then(data => {
            if(data.success){
                userService.user_info(data)
                setUser({name: data.data.name, email: data.data.email})
                

                alert('amjilttai husere bandia')
            }
            else{
                alert('noots kod buruu bn')
            }
        })

      }
  return (
    <div className='login'>

        <div className="left"></div>
        <div className="right">
            <div className="login-side">
                <div className="login-section">
                    <h3>Food delivery</h3>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="" id='mail'>И-мэйл </label>
                        <input type="email" id='mail' placeholder='И-мэйл хаягаа оруулна уу. ' />
                        <label htmlFor="" id='password'>Нууц үг </label>
                        <input type="password" id='password' placeholder='Нууц үгээ оруулна уу. ' />
                        <p className='forgot-password'>Нууц үг мартсан?</p>
                        <button type='submit'  className='login-btn'>Нэвтрэх</button>
                    </form>
                </div>
            </div>
        </div>
           
    </div>
  )
}
