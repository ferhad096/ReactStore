import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Actions/UserAction';

const Register = () => {
  window.scrollTo(0,0)
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(register(name,email,password))
  }
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center login-center'>
      <form className='Login col-md-8 col-lg-4 col-11' onSubmit={e=>submitHandler(e)}>
        <input type="text" placeholder='UserName' value={name} onChange={e=> setName(e.target.value)} />
        <input type="email" placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={e=> setPassword(e.target.value)}/>
        <button type='submit'>Register</button>
        <p>
          <Link to={"/login"}>
            I Have Account <strong>Login</strong>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register