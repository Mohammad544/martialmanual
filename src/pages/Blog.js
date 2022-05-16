import React, { useRef, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../fb';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Blog.css';

function Blog() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  //reference to collection created in firebase
  const postRef = collection(db, 'post')
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if ((titleRef.current.value).length === 0 && (descriptionRef.current.value).length === 0) {
      return setErr('Both fields are empty.')
    }
    else if ((titleRef.current.value).length === 0) {
      return setErr('The title field is empty.')
    }
    else if ((descriptionRef.current.value).length === 0) {
      return setErr('The description field is empty.')
    }
    else {
      try {
        setErr('')
        setLoading(true)
        await addDoc(postRef, {
          title, 
          description, 
          author: {email: auth.currentUser.email, id: auth.currentUser.uid}
        })
        navigate('/viewpost')
      }
      catch {
        setLoading(false)
        setErr('Failed to create post.')
      }
    }
  }

  const handleReset = () => {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }



  return (
    <div className='blog'>
      <form className='blogForm'>
        <h2>Create a Post</h2>
        <label>Title</label>
        <input 
          ref={titleRef}
          placeholder="Enter a title" 
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <label>Description</label>
        <textarea 
          ref={descriptionRef} 
          placeholder="Feel free to make a post" 
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <div className='buttons'>
          <button id='submit' type="submit" onClick={handleSubmit} disabled={loading}>SUBMIT</button>
          <button id='cancel' type="submit" onClick={handleReset} disabled={loading}>CANCEL</button>
          <p><Link to="/viewpost"> Click here to view all posts </Link></p>
          {err && <p id='errorMsg'>{err}</p>}
        </div>
      </form>
    </div>
  )
}

export default Blog