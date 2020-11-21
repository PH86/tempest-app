import React from 'react';
import HeroSection from '../HeroSection.js';
import Experience from '../Experience.js';
import Services2 from '../Services2';



function Home() {
    return (
        <>
           <HeroSection 
           
           pageName="Welcome to Tempest Automation"
           pageDesc=""
           />
           <Experience />
<Services2 />
        </> 
    )
}

export default Home;

