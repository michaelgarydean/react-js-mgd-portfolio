import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Create an empty file if you don't have specific styles

function Header() {
  return (
    <header className="site-header">
      <h1>
        <Link to="/">Michael Gary Dean</Link>
      </h1>
      <nav className="main-menu">
        <Link to="/#media-feed">Projects</Link>

        {/* <Link to="/music">Music</Link>*/}
        <Link to="https://michaelgarydean.bandcamp.com/">Music</Link>
        <a
          href="https://docs.google.com/document/d/17RZNp1doThlW_XGohtfXCRRWAFhG1j3JLdyyiJZVps0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </nav>
    </header>
  );
}

export default Header;
