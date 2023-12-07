import React, { Component } from 'react';
import bsLogo from '../images/bsLogo.png';

class Logo extends Component {
  render() {
    return (
      <div id="logo">
        <img src={ bsLogo } alt="Brawl Stars logo" width="30%" />
      </div>
    );
  }
}

export default Logo;
