import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const AboutPage = (props,) => {
  

  return (
    <div className="about-page" style={{ backgroundColor: '#455A64' }}>

      <div className="content-grid">
        <h1 style={{ color: '#FFFFFF' }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: '#FAFAFA' }}>
            <p>
      
            </p>
            <p>
              React.js, Ruby on Rails, JavaScript, Ruby and
              SQL are the ways I currently write code.  
              Right now I am trying GoLang as it is often used in conjunction with Ruby on Rails to solve bottleneck issues that arise from scaling.
               It's crazy how far I've come since using HTML and CSS!
            </p>

          </div>
        </div>
        <h1 style={{ color: '#FFFFFF' }}>Education</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: '#FAFAFA' }}>
            <h3>Dev Point Labs Boot Camp</h3>
            <p>
            This full-time 12 week course is part of the University of Utah Professional Education school, and covers HTML, CSS, Ruby on Rails, SQL, JavaScript, React, Redux, and more.
                 DevPoint Labs' approach to learning combines pair programming with traditional lectures and a mix of group projects, lean methodologies, hackathons and one-on-one mentorship from instructors.
            </p>

            <h3>University of Utah</h3>
            <p>
            The Elementary Teacher Education Program in the Urban Institute for Teacher Education at the University of Utah
                   is designed to effectively prepare teacher candidates to work with students across various age and ability levels, and from diverse cultural, linguistic, and socioeconomic backgrounds.
            </p>
              <br />  <br /> 
            </div>
            </div>
      </div>

    </div>
  );
};



export default AboutPage;
