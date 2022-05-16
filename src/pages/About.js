import React from 'react';
import Footer from '../components/Footer';
import AboutImage from '../assets/scroll_paper.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about' style={{ backgroundImage: `url(${AboutImage})`}}>
        <h1>ABOUT US</h1>
        <div className='aboutInfo'>
        <h2>Purpose of Martial Manual</h2>
        <p id='purposeInfo'>
          Martial Manual is a learning tool that is made to help you in grasping the foundations of striking martial arts.
          This is achieved through a vast array of content which will be used to teach you numerous skills.
        </p>
        <h2>Sources of Inspiration</h2>
        <p id='inspirationInfo'>
          The concepts covered in Martial Manual are drawn from a wide range of different martial arts, such as Boxing, 
          Muay Thai and Taekwondo. This is so that you are not limited to one specific sport and hence can become a
          more well rounded striker.  
        </p>
        <h2>Audience</h2>
        <p id='audienceInfo'>
          Martial Manual is catered to all age groups above 18, aswell as the four types of learners 
          (visual, auditory, kinesthetic and reading/writing).
        </p>
      </div>
      <div id='footer'><Footer/></div>
    </div>
  );
}

export default About;