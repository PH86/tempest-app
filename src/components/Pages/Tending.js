import React from 'react'
import PageHeroSection from '../PageHeroSection';
import './Project.css';
import Img from '../../Images/pageHeroImg.jpg';

function Tending() {
    return (
        <>
              <PageHeroSection 
        src={Img}
        pageName='Machine Tending Application'
        />
        <div className="project-background">

            <div className="project-container">
                
                <section className="project-lh">
                    <h1 className="project-lh-h1">System Configuration</h1>
                    <ul className="project-lh-list">
                    <li>Doosan CNC Lathes</li>
                        <li>Kuka Robot</li>
                        <li>Siemens S7-1500 PLC</li>
                        <li>Siemens KTP1200</li>
                        <li>3rd Party Infeed System</li>
                        <li>40x40 Exit index Table</li>
                    </ul>
                </section>
                
                <section className="project-rh">
                <div>
                    <h2 className="project-rh-h2">Scope</h2>
                    <p className="project-rh-text">The scope of the project was to automate the manual loading and unloading of 2 CNC lathe operations.  </p>
                </div>
                <div>
                    <h2 className="project-rh-h2">Overview</h2>
                    <p className="project-rh-text">A large batch of forged blanks could be loaded into the machine which would be processed and output as finished components. Utilising a 3rd party linear vibrating in-feed the operator could load up to 20 forged blanks. The blanks were fed to a Kuka robot which loaded into the first CNC lathe. From there the robot would remove the part from the first Lathe and place it into the second. Once completed the finished component was loaded into an out-feed tray.</p>
                    <p className="project-rh-text">The machine was able to accommodate a large variety of product sizes. We were able to achieve this by introducing Profibus communications to the CNC lathes. Utilising this, the CNC lathes transmitted the product dimensions to the PLC where the robot program was set up to allow for variable positioning and was able to adapt on the fly to compensate the different sizes</p>
                </div>
                </section>
            </div>
            </div>
        </>
    )
}

export default Tending
