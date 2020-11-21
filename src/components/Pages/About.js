import React from 'react'
import Img1 from '../../Images/img-02.jpg';
import './About.css';

function About() {
    return (
        <>
             <div>
            <div className='about-hero-container'>
            <img src={Img1} alt="background" className="about-background" />
            <div className="about-container">
            <h1>About Us</h1>
           
            
    <p>Here at Tempest Automation, we specialise in control system design, including servo-control applications where we are experienced in variable speed applications and variable positioning where we can add product recipe interfaces to store settings so the machine can adjust automatically for the selected product saving time with changeovers.</p>
<p>Profinet and Profibus networking solutions to save wiring time and reduce downtime from cable and hardware replacement.</p>
<p>We can integrate 3rd party systems to create a single automated solution from robots to CNC machines. We offer fully bespoke solutions with controls systems design from scratch to suit your needs.</p>
<p>Kuka pick and place, machine tending and palletising robotic solutions to reduce human error and product handling time.</p>
    <p>Our other specialties include temperature control applications using PID to ensure balanced and stable control. We have extended experience with winding applications where we have created winding calculations which accurately control tension and feed. </p>
<p>Product testing systems which store and export test data. Multi part systems which require data tracking and vision system integration, product inspection, code reading and measurement</p>

    </div>
   
        </div>
        </div>
        </>
    )
}

export default About
