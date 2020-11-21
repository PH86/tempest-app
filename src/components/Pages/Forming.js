import React from 'react'
import PageHeroSection from '../PageHeroSection';
import './Project.css';
import Img from '../../Images/pageHeroImg.jpg';

function Forming() {
    return (
        <>
            <PageHeroSection 
        src={Img}
        pageName='Forming Application'
        />
        <div className="project-background">

            <div className="project-container">
                
                <section className="project-lh">
                    <h1 className="project-lh-h1">System Configuration</h1>
                    <ul className="project-lh-list">
                        <li>Siemens S7-1500 PLC</li>
                        <li>Siemens KTP1200</li>
                        <li>Siemens S210 Servo Drives</li>
                        <li>Pilz Safety PLC</li>
                        <li>Keyence Inspection Cameras</li>
                        <li>SMC EX260 Network Manifold</li>
                    </ul>
                </section>
                
                <section className="project-rh">
                <div>
                    <h2 className="project-rh-h2">Scope</h2>
                    <p className="project-rh-text">The scope of the project was to form hydraulic wear rings from strips of woven cloth that have been dipped in resin and cured. The system was required to accommodate a large selection of strip widths and lengths</p>
                </div>
                <div>
                    <h2 className="project-rh-h2">Overview</h2>
                    <p className="project-rh-text">The system fed in a flat product with an in-feed roller drive. Then with a 3 axis saw unit, the strips were cut to length. The pickup fingers transported the product to the heater units and passed it off to the forming fingers. The forming fingers held the product in the heaters for the required time. Once the heating cycle was complete the forming fingers passed the product to the forming unit. The forming unit squeezed the product, then positioned the parts over the inspection camera. The gap of the parts was then checked for tolerance and then ejected from the mandrel</p>
                </div>
                </section>
            </div>
            </div>
        </>
    )
}

export default Forming
