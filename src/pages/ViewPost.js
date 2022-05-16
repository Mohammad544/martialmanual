import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../fb';

import '../styles/ViewPost.css';

function ViewPost( currentUser ) {

  const [postRecords, setPostRecords] = useState([]);
  const postRef = collection(db, 'post')
  const [err, setErr] = useState('')

  useEffect(() => {
    async function getPostRecords() {
      try {
        setErr('')
        const collectionData = await getDocs(postRef);
        setPostRecords(collectionData.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id
        })))
      }
      catch {
        setErr('Failed view posts.')
      }
    }
    getPostRecords();
  }, [deletePost])

  async function deletePost(id) {
    const userSpecificPosts = doc(db, "post", id)
    await deleteDoc(userSpecificPosts)
  }
    

  return (
    <div className='viewPost'>
      <h1>BLOG POSTS</h1>
      {err && <p id='errorMsg'>{err}</p>}
      {postRecords.map((posts) => {
        return (
        <div className='displayedPosts' key={posts.id}> 
          <div className='delete'>
            {currentUser && posts.author.id === auth.currentUser.uid && (
              <button onClick={() => {deletePost(posts.id)}}>Delete</button>
            )}
          </div>
          <div className='postHeader'>
            <h2>{posts.title}</h2>
          </div>
          <div className='postContainer'>
            <p>{posts.description}</p>
          </div>
          <h3>- {posts.author.email}</h3>
        </div>
        )
      })}
    </div>
  )
}

export default ViewPost