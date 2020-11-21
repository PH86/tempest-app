import React from 'react'
import './Services2.css';
import Img from '../Images/plc.jpg';

function Services2() {
    return (
        <div className="services2">
            <div className="services2-container">
                <img src={Img} alt="services" />
                <div className="services2-list-container">
                    <h1 className="services2-title">Our Services</h1>
                    <ul className="services2-list">
                        <li>Equipment Specification</li>
                        <li>Electrical Design</li>
                        <li>Siemens PLC and HMI Software</li>
                        <li>Kuka Robot Programming</li>
                        <li>Sick Safety Software</li>
                        <li>Technical Manuals</li>
                        <li>Training Documentation</li>
                        <li>Full Controls Design Solutions</li>
                        <li>Consultation</li>
                        <li>Machine Improvements</li>
                        <li>Integration</li>
                        <li>Machine Upgrading</li>
                        <li>Interface Upgrades</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services2;
