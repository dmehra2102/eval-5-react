import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

function Login() {
    const navigate = useNavigate()
    const [info,setInfo] = useState({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    const {auth,handleauth}  =useContext(AuthContext);
    const handlesubmit = ()=>{
        axios("https://reqres.in/api/login",{
            method:"POST",
            data: info
        })
        .then((data)=> alert(`your token number is ${data.data.token}`))
        .then(()=> handleauth(!auth))
        .then(()=> navigate(-1,{replace:true}))
        .catch((error)=> console.log(error))
    }
  return (
    <div>
        <input type="email" placeholder='email' defaultValue={"eve.holt@reqres.in"}/>
        <input type="password" placeholder='password' defaultValue={"cityslicka"} />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login