import React from 'react'
import PageHeroSection from '../PageHeroSection';
import './Project.css';
import Img from '../../Images/pageHeroImg.jpg';

function Winding() {
    return (
        <>
        <PageHeroSection 
        src={Img}
        pageName='Winding Application'
        />
        <div className="project-background">

            <div className="project-container">
                
                <section className="project-lh">
                    <h1 className="project-lh-h1">System Configuration</h1>
                    <ul className="project-lh-list">
                        <li>Siemens S7-1500 PLC</li>
                        <li>Siemens TP700</li>
                        <li>Siemens S210 Servo Drives</li>
                        <li>Siemens Sick Flexisoft Safety PLC</li>
                        <li>SMC EX260</li>
                    </ul>
                </section>
                
                <section className="project-rh">
                <div>
                    <h2 className="project-rh-h2">Overview</h2>
                    <p className="project-rh-text">The system wrapped filter media under tension around a steel inner core and once complete the wrapped core was pressed into a steel outer core. The media was kept under tension via a dancing arm control loop which ensures constant stable tension throughout the wrapping.</p>
                </div>
                <div>
                    <h2 className="project-rh-h2">Tension Control</h2>
                    <p className="project-rh-text">This tension was controlled by a Siemens servo axis to rotate the pay in media and a dancing arm. The unwinder axis changed velocity during the wrapping by monitoring the dancing arm position and compensating its speed to keep the tension constant. We used 2 Keyence distance measurement sensors, the first monitored the media roll diameter which is used to calculate the required speed. The second monitored the position of the dancing arm to calculate what tension compensation is required. </p>
                </div>
                <div>
                    <h2 className="project-rh-h2">Wrapping Control</h2>
                    <p className="project-rh-text">This consisted of 2 Siemens servo axis and a range of pneumatic cylinders. The belt drive axis rotated the inner core to create the wrapping action via a belt roller, the belt then rolled the media around the inner core which created even wraps. The core winder rotated the inner core at 2 stages, the first was to rotate the inner core faster than the media feed to create a curl at the start of the media to aid in wrapping. The second was to rotate the wrapped inner core into the outer core to avoid the media snagging on the outer core.</p>
                </div>
                </section>
            </div>
            </div>
        </>
    )
}

export default Winding
