import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderImage from '../assets/Sifu_image.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${HeaderImage})`}}>
      <div className='header'>
        <h1>LEARN THE FUNDAMENTALS OF <br/> STRIKING MARTIAL ARTS</h1>
        <p> Martial Manual is a website designed to teach you the basics of <br/> striking-based martial arts from the comfort of your own home </p>
        <Link to="/content"><button>View Content</button></Link>
      </div>
      <div id='footer'><Footer/></div>
    </div>
  );
}

export default Home;