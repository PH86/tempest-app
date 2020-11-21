import React from 'react';
import './Services.css';
import PLC from '../../Images/plcProg.jpeg';
import Elec from '../../Images/elec.jpeg';
import Flex from '../../Images/flex.jpg';
import PageHeroSection from '../PageHeroSection';
import Img from '../../Images/pageHeroImg.jpg';

function Services() {
    return (
        <>
        <PageHeroSection 
        src={Img}
        pageName='Our Services'
        />
        <div className="services-background">
            <div className="services-container">
                <div className="services-service">
                    <img src={PLC} alt="service"/>
                    <h2>Siemens PLC</h2>
                    <p>We specialise in Siemens S7-1200 and S7-1500 programming, with focus on simplifying operator input using recipes to store product settings which we use to automatically set the machine. </p>
                </div>
                <div className="services-service">
                    <img src={Elec} alt="service"/>
                    <h2>Electrical Design</h2>
                    <p>We can provide a full electrical design solution. Whether you have your own wiring numbers and equipment specification or you would like us to do that for you. We can tailor the solution for your needs</p>
                </div>
                <div className="services-service">
                    <img src={Flex} alt="service"/>
                    <h2>Sick FlexiSoft</h2>
                    <p>We can offer Sick Flexisoft safety solutions to meet your needs</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;
