import React, { useState } from 'react';
import './style.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='auth'>
      <div className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>

          <input className="login-input" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} type="name" placeholder="Login" />

          <input className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
