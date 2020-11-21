import React from 'react';
import './Experience.css';
import Img from '../Images/Rbt.jpg';

function Experience() {
    return (
        <div className="experience-container">
            <h1 className="experience-title">Our Experience</h1>
            <p className="experience-text">We are dedicated to automation. With over 15 years of experience within the special purpose, automotive, aerospace, pharmaceutical, R & D, and manufacturing industries, Tempest Automation can offer you a tailored solution for your needs. We provide full controls design solutions, from initial concept design through to onsite commissioning. We specialise in Siemens S7-1200 and S7-1500 programming. </p>
            <img src={Img} alt="experience"/>
        </div>
    )
}

export default Experience;
