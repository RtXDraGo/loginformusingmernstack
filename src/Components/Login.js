import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
export default function Login({ setloginuser }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const history = useHistory()
    const handle = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const submit = () => {
        axios.post("http://localhost:8000/login", user)
            .then(
                res => {
                    alert(res.data.message)
                    setloginuser(res.data.user)
                    history.push("/")
                }
            )
    }
    return (
        <>
            <div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={user.email} placeholder="Rnter Your Email" onChange={handle} />                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} placeholder="Enter Your Password" onChange={handle} />
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={submit}>Login</button>
                <button type="submit" className="btn btn-secondary mx-2" onClick={() => history.push('/register')}>Register</button>
            </div>
        </>
    )
}
