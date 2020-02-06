import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import './style.scss';

const LandingPage = (props) => {
  

  return (
    <div style={{ backgroundColor: '#455A64' }} className="landing-page">
      <Nav />
      <main style={{ color: '#FFFFFF'}}>
        <div className="intro-wrapper">
          <div className="intro-name">Hello, I'm Max!</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | TroubleShooter
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};



export default LandingPage;
