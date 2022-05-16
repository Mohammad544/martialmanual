import React from 'react';
import Footer from '../components/Footer';
import SparringImage from '../assets/Sparring_illustration.jpg';
import PreventInjuryImage from '../assets/Prevent_Injury_Image.jpg';
import InjuryImage from '../assets/Injury_Image.png';
import MAKnowledgeImage from '../assets/MA_Knowledge_Image.jpg';
import EquipmentImage from '../assets/Equipment_Image.jpg';


import '../styles/Faq.css';

function Faq() {
  return (
    <div className='faq'>
        <h1>FAQ</h1>
        <div className='faqCard'>
        <Card
        img={SparringImage}
        question="Does the content include sparring?"
        answer="The learning process will not involve any form of physical contact with another person. 
        This means there will be no sparring drills involved, and will only focus on non-contact exercises 
        such as Kata."
        />

        <Card
        img={PreventInjuryImage}
        question="How can I prevent injuries?"
        answer="In the content page, there is a
        message which advises you to stretch before engaging with the material.
        Additionally, the techniques which are taught will be demonstrated with
        the correct form. These methods are used to prevent injuries such as 
        pulling a muscle."
        />

        <Card
        img={InjuryImage}
        question="Are there any measures in the event of an injury?"
        answer="In the content page there is a message which indicates the
        necessary steps you should take if you have been injured."
        />

        <Card
        img={MAKnowledgeImage}
        question="Will I need prior knowledge of martial arts?"
        answer="The material that is shown is used to teach you the basics of
        striking martial arts, and hence it does not entail you to have previous martial arts experience."
        />

        <Card
        img={EquipmentImage}
        question="Do I need training equipment?"
        answer="No. However, if you do have equipment available it can be very useful. For instance,
        using a punching bag to practice the techniques that you have learnt."
        />
        </div>
      <div id='footer'><Footer/></div>
    </div>
  );
}

function Card(props) {
  return (
    <div className='card'>
        <div className='cardBody'>
            <img src={props.img} alt=''/>
            <h2 className='cardQuestion'>{props.question}</h2>
            <p className='cardAnswer'>{props.answer}</p>
        </div>
    </div>
  );
}

export default Faq;