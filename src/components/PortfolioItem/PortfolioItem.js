import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props,) => {

  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: '#FFFFFF', color: '#455A64' }}
      >
        <div className="portfolio-item__title">Badass</div>

        <div className="portfolio-item__desc">
          Max's Portfolio
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};


export default PortfolioItem;
