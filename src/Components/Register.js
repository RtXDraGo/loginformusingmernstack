import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
export default function Register() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        rpassword:""
    })
    const history=useHistory()
    const handle=e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const submit=()=>{
      const{name,email,password,rpassword}=user
      if(name && email && password && rpassword && (password===rpassword))
      {
        axios.post("http://localhost:8000/register",user)
        .then(res=>{alert(res.data.message)
          if(res.data.user._id)
          history.push("/login")
        })
      }
      else
      {
        alert("Invalid")
      }
      
    }
    
  return (
    <>
  <div>
  <div className="mb-3">
    <label for="name" className="form-label">Enter Name</label>
    <input type="text" className="form-control" name="name" value={user.name} aria-describedby="emailHelp" placeholder="Enter your name" onChange={handle} required/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Enter Email</label>
    <input type="email" className="form-control" name="email" value={user.email} placeholder="Rnter Your Email" onChange={handle} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={user.password} placeholder="Enter Your Password" onChange={handle} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label">Retype Password</label>
    <input type="password" className="form-control" name="rpassword" value={user.rpassword} placeholder="Retype password" onChange={handle} required/>
  </div>
  <button type="submit" className="btn btn-primary mx-2" onClick={submit}>Submit</button>
  <button type="submit" className="btn btn-secondary mx-2" onClick={()=>history.push('/login')}>Login</button>
  </div>
    </>
  )
}
