import React from 'react';
import profilePic from '../assets/profilePic.png';

const About = () => (
  <div>
    <section id="about">
      <div className="row">
        <div className="two columns">
          <img src={profilePic} className="profilePic" alt="Laurel Herting" />
        </div>
        <div className="ten columns main-col">
          <h3>About Me</h3>
          <p>
            Creative, detailed, articulate and results-driven software developer
            participating in solid application architecture and coding. Diligent
            and passionate about problem solving and understanding abstract
            concepts using strong research skills to find innovative solutions.
          </p>
          <p>
            Excellent written and verbal communication skills useful in forward
            moving positive attitude as a team player. Great time and task
            management skills, quick learner with both deep and broad technical
            exposure. Confident and focused to achieve high end user
            satisfaction.
          </p>
          <h3>Contact Details</h3>
          <p className="address">
            <span>Denver, Colorado USA</span>
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
