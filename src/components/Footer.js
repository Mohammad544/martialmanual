import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <h4>CONTACT</h4>
        <div className='contactInfo'>
            <div className='email'>
                <EmailIcon /> 
                <a href = "mailto: mohammad.islam2000@outlook.com">mohammad.islam2000@outlook.com</a>
            </div>
            <div className='contact'>
                <ContactPhoneIcon />
                <p>07958524803</p>
            </div>
            <div className='location'>
                <LocationOnIcon /> 
                <p>London, UK</p>
            </div>
        </div>
        <hr></hr>
        <p> &copy; 2022 Martial Manual. All Rights Reserved. </p>
    </div>
  );
}

export default Footer;