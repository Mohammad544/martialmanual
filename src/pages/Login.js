import React, {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../contexts/Auth';
import '../styles/Login.css';

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if ((emailRef.current.value).length === 0 && (passwordRef.current.value).length === 0) {
      return setErr('Both fields are empty.')
    }
    else if ((emailRef.current.value).length === 0) {
      return setErr('The email field is empty.')
    }
    else if ((passwordRef.current.value).length === 0) {
      return setErr('The password field is empty.')
    }
    else {
      try {
        setErr('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      }
      catch {
        setLoading(false)
        setErr('Incorrect username or password.')
      }
    }}
  return (
    <div className='login'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h3>Email</h3>
        <input 
          type="email" 
          ref={emailRef}
          placeholder="Enter your email" 
        />
        <h3>Pasword</h3>
        <input
          id="userPassword" 
          type="password" 
          ref={passwordRef}
          placeholder='Enter your password' 
        />
        <p id='forgotPassword'><Link to="/reset-password">Forgot Password?</Link></p>
        <button type="submit" disabled={loading}>LOGIN</button>
        <p>Dont have an account? <Link to="/register"> Sign up </Link></p>
        {err && <p id='errorMsg'>{err}</p>}
      </form>
    </div>
  )
}

export default Login;