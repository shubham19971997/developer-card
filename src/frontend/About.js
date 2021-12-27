import React from 'react';
import Navbar from './Components/Navbar';
import './style/About.css';

function About() {
    return (
        <div className="about">
            <Navbar/>
            <div className="about-main">
                <h1>About Us</h1>
                <p>Looking for scholarships for high school seniors? You’ve come to the right place! This handy guidebook will give you all the information (and more) you need to find scholarships for high school seniors. In this guide, you’ll learn about scholarships for different types of students, different scholarships by subject, scholarship applications, easy and weird scholarships, local scholarships, corporate scholarships, fraternity and sorority scholarships, and more. Read on for more information on how you can win scholarships for high school seniors…</p>
            </div>
        </div>
    )
}

export default About
