import React from 'react';
import Footer from '../components/Footer';

import BulletPointIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import stretchingThumbnail from '../assets/Stretching_Thumbnail.png';
import stretchingVid from '../assets/Stretching.mp4';

import VideoPlayer from "react-video-js-player";

import teepSilhouette from '../assets/Teep_Silhouette.png';
import teepStep1 from '../assets/Teep_Step1.png';
import teepStep2 from '../assets/Teep_Step2.png';
import teepStep3 from '../assets/Teep_Step3.png';
import teepStep4 from '../assets/Teep_Step4.png';
import teepThumbnail from '../assets/Teep_Thumbnail.png';
import teepVideo from '../assets/Teep_Tutorial.mp4';

import straightSilhouette from '../assets/Straight_Punch_Silhouette.png';
import straightStep1 from '../assets/Straight_Punch_Step1.png';
import straightStep2 from '../assets/Straight_Punch_Step2.png';
import straightStep3 from '../assets/Straight_Punch_Step3.png';
import straightStep4 from '../assets/Straight_Punch_Step4.png';
import straightThumbnail from '../assets/Straight_Punch_Thumbnail.png';
import straightVideo from '../assets/Straight_Punch_Tutorial.mp4';

import elbowSilhouette from '../assets/Elbow_Strike_Silhouette.png';
import elbowStep1 from '../assets/Elbow_Strike_Step1.png';
import elbowStep2 from '../assets/Elbow_Strike_Step2.png';
import elbowStep3 from '../assets/Elbow_Strike_Step3.png';
import elbowStep4 from '../assets/Elbow_Strike_Step4.png';
import elbowStep5 from '../assets/Elbow_Strike_Step5.png';
import elbowThumbnail from '../assets/Elbow_Strike_Thumbnail.png';
import elbowVideo from '../assets/Elbow_Strike_Tutorial.mp4';

import lowSilhouette from '../assets/Low_Kick_Silhouette.png';
import lowStep1 from '../assets/Low_Kick_Step1.png';
import lowStep2 from '../assets/Low_Kick_Step2.png';
import lowStep3 from '../assets/Low_Kick_Step3.png';
import lowStep4 from '../assets/Low_Kick_Step4.png';
import lowStep5 from '../assets/Low_Kick_Step5.png';
import lowStep6 from '../assets/Low_Kick_Step6.png';
import lowStep7 from '../assets/Low_Kick_Step7.png';
import lowThumbnail from '../assets/Low_Kick_Thumbnail.png';
import lowVideo from '../assets/Low_Kick_Tutorial.mp4';

import backfistSilhouette from '../assets/Backfist_Silhouette.png';
import backfistStep1 from '../assets/Backfist_Step1.png';
import backfistStep2 from '../assets/Backfist_Step2.png';
import backfistStep3 from '../assets/Backfist_Step3.png';
import backfistStep4 from '../assets/Backfist_Step4.png';
import backfistThumbnail from '../assets/Backfist_Thumbnail.png';
import backfistVideo from '../assets/Backfist_Tutorial.mp4';

import '../styles/Content.css';

function Content() {
  const video1 = teepVideo;
  const video2 = straightVideo;
  const video3 = elbowVideo;
  const video4 = lowVideo;
  const video5 = backfistVideo;

  const poster1 = teepThumbnail;
  const poster2 = straightThumbnail;
  const poster3 = elbowThumbnail;
  const poster4 = lowThumbnail;
  const poster5 = backfistThumbnail;

  return (
    <div className='content'>
        <h1>CONTENT</h1>
        <div className='contentArea'>
            <div className='contentSubArea1'>
              <h2>Introduction</h2>
              <div className='bulletPoints'>
                <div className='bulletPoint1'>
                  <BulletPointIcon/>
                  <h3>Welcome to Martial Manual!</h3>
                </div>
                <div className='bulletPoint2'>
                  <BulletPointIcon/>
                  <h3>Here you'll learn a variety of techniques stemming from multiple different martial arts.</h3>
                </div>
                <div className='bulletPoint3'>
                  <BulletPointIcon/>
                  <h3>Before we get started, please ensure that you have stretched effectively.</h3>
                </div>
                <div className='video1'><video src={stretchingVid} type="video/mp4" poster={stretchingThumbnail} autoPlay loop> </video> </div>
                <div className='stretchesList'>
                  <h4>Recommended Stretches</h4>
                  <p>- Hamstring (standing and sitting)</p>
                  <p>- Quadriceps</p>
                  <p>- Shoulders (front and back)</p>
                  <p>- Side Lunge</p>
                </div>
                <div className='bulletPoint4'>
                  <BulletPointIcon/>
                  <h3>For any injuries, please visit <a href = "https://www.mayoclinic.org/patient-care-and-health-information">Mayo Clinic</a> to seek medical advice.</h3>
                </div>
              </div>   
            </div>

            <div className='contentSubArea2'>
              <h2>1. Front Kick / Teep</h2>
              <div className='resultingTechnique1'>
                <img src={teepSilhouette} alt=''></img>
                <ul>
                  <li>In Muay Thai this is called a <b>teep</b>, whereas other martial arts (such as Taekwondo and Kungfu) refer to it as a <b>front kick</b>.</li>
                  <li>It is a very effective kick which uses the ball of the foot to generate as much force as possible to push an opponent away from you.</li>
                  <li>This is a basic technique that is usually not very damaging in Muay Thai, and instead acts as a method to find your range.</li>
                  <li>It can be executed using your front or rear leg.</li>
                </ul>
              </div>
              <h3>Sequence of events</h3>
              <div className='sequence'>
                <div className='sequence1'>
                  <img src={teepStep1} alt=''></img>
                  <p><b>Step 1:</b> Raise your rear leg/knee up to chest level.</p>
                </div>
                <div className='sequence2'>
                  <img src={teepStep2} alt=''></img>
                  <p><b>Step 2:</b> Adjust your leg at a 90° angle from your body.</p>
                </div>
                <div className='sequence3'>
                  <img src={teepStep3} alt=''></img>
                  <p><b>Step 3:</b> Extend your leg and push outwards.</p>
                </div>
                <div className='sequence4'>
                  <img src={teepStep4} alt=''></img>
                  <p><b>Step 4:</b> Bring the leg back down to the ground.</p>
                </div>
              </div>
              <h3>Technical Guide</h3>
              <VideoPlayer
                  src={video1} 
                  poster={poster1}
              />
            </div>

            <div className='contentSubArea3'>
              <h2>2. Straight Punch</h2>
              <div className='resultingTechnique2'>
                <img src={straightSilhouette} alt=''></img>
                <ul>
                  <li>In Boxing this is commonly known as a <b>cross</b>, whereas in Kung Fu it is called a <b>throat punch</b>.</li>
                  <li>They are similar in a sense that they both use the first two knuckles to strike the target.</li>
                  <li>The difference between them is that when a cross is thrown, the palm of your hand is facing downwards (as shown in the siloutte above).</li>
                  <li>When a throat punch is thrown, the palm of your hand is facing upwards (as shown in the sequence below).</li>
                  <li>A straight punch is thrown with the rear hand, which is considered the power hand.</li>
                  <li>
                    As a rule of thumb in most martial arts (especially boxing) if you are right handed then your right hand would be the rear hand (orthodox position), 
                    and if you are left handed then your left hand would be the rear hand (southpaw position).
                  </li>
                </ul>
              </div>
              <h3>Sequence of events</h3>
              <div className='sequence'>
                <div className='sequence1'>
                  <img src={straightStep1} alt=''></img>
                  <p>
                    <b>Step 1: </b> 
                    Get into and Hold your stance. If your are right handed, you should have your left foot forward and right foot back. 
                    If your are left handed, you should have your right foot forward and left foot back.
                  </p>
                </div>
                <div className='sequence2'>
                  <img src={straightStep2} alt=''></img>
                  <p><b>Step 2:</b> Rotate your hips to generate the most amount of power.</p>
                </div>
                <div className='sequence3'>
                  <img src={straightStep3} alt=''></img>
                  <p><b>Step 3:</b> Fully extend your rear arm and rotate your fist. By the time your arm is fully extended, ensure that the back of your hand is facing upwards.</p>
                </div>
                <div className='sequence4'>
                  <img src={straightStep4} alt=''></img>
                  <p><b>Step 4:</b> Bring your arm back to the neutral position and shift your feet back to your starting stance.</p>  
                </div>
              </div>
              <h3>Technical Guide</h3>
              <VideoPlayer
                  src={video2} 
                  poster={poster2}
              />
            </div>

            <div className='contentSubArea4'>
              <h2>3. Elbow Strike</h2>
              <div className='resultingTechnique3'>
                <img src={elbowSilhouette} alt=''></img>
                <ul>
                  <li>Elbow strikes are commonly used in Muay Thai, Karate and Wing Chun.</li>
                  <li>This is a powerful and close range technique which can badly hurt your target via a concussive blow, or by cutting their skin open.</li>
                  <li>It is thrown using the tip of the elbow, which is considered a very solid and sharp area of the elbow.</li>
                  <li>This strike can be executed using your front or rear elbow.</li>
                </ul>
              </div>
              <h3>Sequence of events</h3>
              <div className='sequence'>
                <div className='sequence1'>
                  <img src={elbowStep1} alt=''></img>
                  <p><b>Step 1:</b> Get into your preferred stance and flex your rear bicep. Make sure that your elbow is behind you and is pointing at a 45° angle from the floor.</p>
                </div>
                <div className='sequence2'>
                  <img src={elbowStep2} alt=''></img>
                  <p><b>Step 2:</b> Bring your elbow up so that it is now perpendicular to the floor and ensure that your front hand (open or closed) is tucked close to your chin.</p>
                </div>
                <div className='sequence3'>
                  <img src={elbowStep3} alt=''></img>
                  <p><b>Step 3:</b> Extend your elbow forward (horizontally) so that it is now in front of you, with your front hand positioned under it.</p>
                </div>
                <div className='sequence4'>
                  <img src={elbowStep4} alt=''></img>
                  <p><b>Step 4:</b> Follow through with the elbow until it is inline with the side of your body</p>  
                </div>
                <div className='sequence5'>
                  <img src={elbowStep5} alt=''></img>
                  <p><b>Step 5:</b> Bring your elbow back to the starting position and shift your feet back to your starting stance.</p>  
                </div>
              </div>
              <h3>Technical Guide</h3>
              <VideoPlayer
                  src={video3} 
                  poster={poster3}
              />
            </div>

            <div className='contentSubArea5'>
              <h2>4. Low Kick</h2>
              <div className='resultingTechnique4'>
                <img src={lowSilhouette} alt=''></img>
                <ul>
                  <li>Low kicks are frequently used in Mixed Martial Arts. </li>
                  <li>These kicks are usually targeted at an opponents thigh or calf muscles in order to effectively damage their legs.</li>
                  <li>They can also be used trip an opponent to the ground.</li>
                  <li>The kick is thrown using your shinbone, which is the second largest bone in the body.</li>
                  <li>This is why low kicks are very successful in immobilising an opponents legs.</li>
                </ul>
              </div>
              <h3>Sequence of events</h3>
              <div className='sequence'>
                <div className='sequence1'>
                  <img src={lowStep1} alt=''></img>
                  <p><b>Step 1:</b> Get into your preferred stance.</p>
                </div>
                <div className='sequence2'>
                  <img src={lowStep2} alt=''></img>
                  <p><b>Step 2:</b> Pick up your rear leg at a 45° angle.</p>
                </div>
                <div className='sequence3'>
                  <img src={lowStep3} alt=''></img>
                  <p><b>Step 3:</b> Move your leg upwards until your knee is inline with your stomach.</p>
                </div>
                <div className='sequence4'>
                  <img src={lowStep4} alt=''></img>
                  <p><b>Step 4:</b> Rotate your knee, so that the bottom half of your leg is level with the ground.</p>  
                </div>
                <div className='sequence5'>
                  <img src={lowStep5} alt=''></img>
                  <p>
                    <b>Step 5: </b> 
                    Swing your leg inwards, ensuring that your leg becomes fully extended in the process. 
                    While you are swinging your leg, make sure that your other leg (specifically your foot)
                    is pivoting at a 90° angle from where it originally was.
                  </p>  
                </div>
                <div className='sequence6'>
                  <img src={lowStep6} alt=''></img>
                  <p><b>Step 6:</b> Follow through with the kick, making sure that your leg gets nearer to the ground.</p>  
                </div>
                <div className='sequence7'>
                  <img src={lowStep7} alt=''></img>
                  <p><b>Step 7:</b> Bring the leg back to the neutral position</p>  
                </div>
              </div>
              <h3>Technical Guide</h3>
              <VideoPlayer
                  src={video4} 
                  poster={poster4}
              />
            </div>

            <div className='contentSubArea6'>
              <h2>5. Backfist</h2>
              <div className='resultingTechnique5'>
                <img src={backfistSilhouette} alt=''></img>
                <ul>
                  <li>A backfist is very common in Karate.</li>
                  <li>It is a technique which is predominantly thrown with the front hand and can cause bone fractures on an opponents face.</li>
                  <li>This strike is thrown using the first two knuckles and the dorsal (back) side of your hand.</li>
                  <li>There are multiple variations of this move, including a spinning backfist which uses a persons momentum to make it more damaging.</li>
                </ul>
              </div>
              <h3>Sequence of events</h3>
              <div className='sequence'>
                <div className='sequence1'>
                  <img src={backfistStep1} alt=''></img>
                  <p><b>Step 1:</b> Keep your front hand, in a backfist position, close to your stomach area. Keep your other hand guarding your chin.</p>
                </div>
                <div className='sequence2'>
                  <img src={backfistStep2} alt=''></img>
                  <p><b>Step 2:</b> Move your front fist even closer to your stomach.</p>
                </div>
                <div className='sequence3'>
                  <img src={backfistStep3} alt=''></img>
                  <p><b>Step 3:</b> Extend your fist outwards, ensuring that the back of your fist is facing the desired target.</p>
                </div>
                <div className='sequence4'>
                  <img src={backfistStep4} alt=''></img>
                  <p><b>Step 4:</b> Bring your fist back to the neutral position.</p>  
                </div>
              </div>
              <h3>Technical Guide</h3>
              <VideoPlayer
                  src={video5}
                  poster={poster5} 
              />
            </div>
        </div>
      <div id='footer'><Footer/></div>
    </div>
  );
}

export default Content;