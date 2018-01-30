import React from 'react';
import profilePic from './assets/profilePic.png';

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
            Diligent, results-driven, detailed, and articulate software
            developer with participation creating solid application architecture
            and coding. Passionate about problem-solving in order to understand
            abstact concepts through strong research skills resulting in
            innovative solutions.
          </p>
          <p>
            Excellent written and verbal communication skills while maintaining
            a positive attitude. Great at time and task management, quick
            learning ability for deep and broad technical exposure. Confident,
            up-to-date team player determined to achieve high end user focus.
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
