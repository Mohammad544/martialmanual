import React, {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../contexts/Auth';
import '../styles/Register.css';

function Register() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { register } = useAuth()
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if ((emailRef.current.value).length === 0 && (passwordRef.current.value).length === 0 && (confirmPasswordRef.current.value).length === 0) {
      return setErr('All fields are empty.')
    }
    else if ((emailRef.current.value).length === 0 && (passwordRef.current.value).length === 0) {
      return setErr('The email and password fields are empty.')
    }
    else if ((emailRef.current.value).length === 0 && (confirmPasswordRef.current.value).length === 0) {
      return setErr('The email and confirm password fields are empty.')
    }
    else if ((passwordRef.current.value).length === 0 && (confirmPasswordRef.current.value).length === 0) {
      return setErr('The password and confirm password fields are empty.')
    }
    else if ((emailRef.current.value).length === 0) {
      return setErr('The email field is empty.')
    }
    else if ((passwordRef.current.value).length === 0) {
      return setErr('The password field is empty.')
    }
    else if ((confirmPasswordRef.current.value).length === 0) {
      return setErr('The confirm password field is empty.')
    }
    else if ((passwordRef.current.value).length !== (confirmPasswordRef.current.value).length) {
      return setErr('The passwords you entered do not match.')
    }
    else {
      try {
        setErr('')
        setLoading(true)
        await register(emailRef.current.value, passwordRef.current.value)
        setLoading(false)
        navigate('/')
      }
      catch {
        setErr('Registration Failed')
      }
    }}

  return (
    <div className='register'>
      <form className='registerForm' onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <h3>Email</h3>
        <input 
          type="email" 
          ref={emailRef}
          placeholder='Enter your email' 
        />
        <h3>Pasword</h3>
        <input 
          type="password" 
          ref={passwordRef}
          placeholder='Enter your password' 
        />
        <h3>Confirm Password</h3>
        <input 
          id='confirmPassword' 
          type="password" 
          ref={confirmPasswordRef}
          placeholder='Confirm your password' 
        />
        <button type="submit" disabled={loading}>REGISTER</button>
        <p>Already have an account? <Link to="/login"> Sign in here </Link></p>
        {err && <p id='errorMsg'>{err}</p>}
      </form>
    </div>
  )
}

export default Register