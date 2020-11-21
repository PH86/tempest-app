
import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import Vid from '../Videos/Kuka.mp4';

function HeroSection(props) {
    return (
        <div>
            <div className='hero-container'>
            <video src={Vid} alt='robot' autoPlay loop muted />
            <h1>{props.pageName}</h1>
    <p>{props.pageDesc}</p>
           
           <Button link='/tempest-app/about' className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">About us</Button>
                
        </div>
        </div> 
    );
}

export default HeroSection;
