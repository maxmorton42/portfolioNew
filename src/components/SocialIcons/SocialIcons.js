import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props,) => {
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/maxmorton42" style={ { color: '#FFFFFF' } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/max.morton1" style={ { color: '#FFFFFF' } }><i className="fab fa-facebook"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/flexdinesh" style={ { color: '#FFFFFF' } }><i className="fab fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/max-morton-024841b6/" style={ { color: '#FFFFFF' } }><i className="fab fa-linkedin"></i></a>

      </div>
  );
};

export default SocialIcons;