import React from 'react'
import { useState } from 'react'
import './App.css'


const App = () => {
  const[formData,SetFormData] =useState({
    username:"",
    address:"",
    email:"",
    password:"",

  })
  const handlechange=(e)=> {
    SetFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
const handleSubmit=(e)=> {
  e.preventDefault();
  alert("register succesfully")
}

  
  return (
   <div className="container">
    <div className="register">
      <form onSubmit={handleSubmit} >
        <center><h1>Register</h1></center>
        <input type="text" placeholder="Username" onChange={handlechange} required/>
        <input type="text" placeholder=" Address"  onChange={handlechange}required />
        <input type="email" placeholder="Email"onChange={handlechange} required/>
        <input type="password" placeholder=" Password" onChange={handlechange} required />
        <button type="submit"> Submit </button>
      </form>
    </div>
   </div>

  )
}

export default App