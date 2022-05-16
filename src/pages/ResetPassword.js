import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom';
import {useAuth} from '../contexts/Auth';
import '../styles/ResetPassword.css';

function ResetPassword() {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [successMsg, setSuccessMsg] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if ((emailRef.current.value).length === 0) {
      return setErr('The email field is empty.')
    }
    else {
      try {
        setSuccessMsg('')
        setErr('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setSuccessMsg('We have emailed you a password reset Link!')
      }
      catch {
        setErr('Reset Failed')
      }
      setLoading(false)
    }}
  return (
    <div className='resetPassword'>
      <form className='resetPasswordForm' onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <h3>Email</h3>
        <input 
          type="email" 
          ref={emailRef}
          placeholder="Enter your email" 
        />
        <button type="submit" disabled={loading}>RESET</button>
        <p id='login'>Click here to <Link to="/login"> Sign in </Link></p>
        <p id='register'>Dont have an account? <Link to="/register"> Sign up </Link></p>
        {successMsg && <p id='successMsg'>{successMsg}</p>}
        {err && <p id='errorMsg'>{err}</p>}
      </form>
    </div>
  )
}

export default ResetPassword;