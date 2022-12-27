import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (

      <header className="site-header page-padding vertical-page-padding fadein-on-load">
        <div className="header-section" id="header-title">
          <h1><a href="#" className="site-title">Michael Gary Dean</a></h1>
        </div>
        <div className="header-section">
          <nav className="main-menu">
            <a href="https://michaelgarydean.bandcamp.com/" className="header-menu-item">Music</a>
            <a href="https://michaeldean.ca/projects/" className="header-menu-item">Projects</a>
            <a href="https://michaeldean.ca/wp-content/uploads/2022/02/MICHAEL_GARY_DEAN_CV_March_2022.pdf" className="header-menu-item">CV</a>

        </nav>
      </div>
    </header>
    );
  }
}

export default Header