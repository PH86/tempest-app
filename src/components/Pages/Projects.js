import React from 'react';
import Cards from '../Cards';
import Img from '../../Images/img-02.jpg';
import PageHeroSection from '../PageHeroSection';


function Projects() {
    return (
        <>
        <PageHeroSection 
        src={Img}
        pageName='Our Projects'
        />
            <Cards 
            src={Img}
            />
        </>
    )
}

export default Projects
