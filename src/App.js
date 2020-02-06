import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import Footer from '@components/Footer';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <Footer />
      </div>
    );
  }
}

export default App;
