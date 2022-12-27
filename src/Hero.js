import React, { Component } from 'react';
import './Hero.css'

import SocialMediaIcons from './SocialMediaIcons';

class Hero extends Component {
  render() {
    return (

    <section className="hero">
        <div className="hero-background-wrapper">
          <div className="hero-background">
          </div>
        </div>
        <div className="hero-inner page-padding fadein-on-load">
          <h2>Abandoned Pianos II</h2>
          <a href="https://michaelgarydean.fanlink.to/abandoned-pianos-ii"><button>Listen/Buy</button></a>
        </div>

        <div className="hero-footer page-padding vertical-page-padding fadein-on-load">
          <div className="hero-footer-section">
            <p>Scores available through Hal Leonard.</p>
          </div>
          <SocialMediaIcons />
        </div>

        </section>
    );
  }
}

export default Hero