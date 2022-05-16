import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/MM_Logo.png';
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';


function Navbar() {

  const [clicked, setClicked] = useState(false);

  const toggleNavbar = () => {
    setClicked(!clicked);
  };

  const [, setErr] = useState('')
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setErr('')

    try {
      await logout()
      navigate('/login')
    }
    catch {
      setErr('Logout Failed')
    }
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={clicked ? 'open' : 'close'}>
          <img src={logo} alt=''/>
          <div className="hiddenLinks">
            <Link to="/" className='navbarLinks'> HOME </Link>
            <Link to="/content" className='navbarLinks'> CONTENT </Link>
            <Link to="/about" className='navbarLinks'> ABOUT </Link>
            <Link to="/faq" className='navbarLinks'> FAQ </Link>
            {currentUser && <Link to="/blog" className='navbarLinks'>BLOG</Link>}
            {!currentUser ? (
              <Link to="/login"><button className='hiddenSignInBtn'>SIGN IN</button></Link>
            ) : (
              <button onClick={handleLogout} className='hiddenSignOutBtn'>SIGN OUT</button>
            )}
          </div>
        </div>
        <div className='rightSide' id={clicked ? 'open' : 'close'}>
          <div className="visibleLinks">
            <Link to="/" className='navbarLinks'>HOME</Link>
            <Link to="/content" className='navbarLinks'>CONTENT</Link>
            <Link to="/about" className='navbarLinks'>ABOUT</Link>
            <Link to="/faq" className='navbarLinks'>FAQ</Link>
            {currentUser && <Link to="/blog" className='navbarLinks'>BLOG</Link>}
              {!currentUser ? (
              <Link to="/login"><button className='visibleSignInBtn'>SIGN IN</button></Link>
              ) : (
                <button onClick={handleLogout} className='visibleSignOutBtn'>SIGN OUT</button>
            )}
          </div>
          <button className='reorder' onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  );
}

export default Navbar;