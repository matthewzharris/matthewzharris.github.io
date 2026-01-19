import React from 'react';
import { Transition, config } from 'react-spring';

import './Hero.css';

import Image from './Image';

const Hero = ({ title, subtitle, image, imageAlt, imageCaption, portrait, portraitAlt, children }) => (
  <Transition config={config.slow} from={{ opacity: 0 }} enter={{ opacity: 1 }}>
    {(styles) => (
      <header style={styles} className={`container mt-6 mb-6 ${portrait ? 'hero-with-portrait' : 'd-flex flex-column'}`}>
        <div className="hero-content">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
          {children}
        </div>
        {portrait && (
          <div className="hero-portrait-wrapper">
            <div className="hero-portrait-overlay"></div>
            <img
              className="hero-portrait"
              src={portrait}
              alt={portraitAlt || 'Portrait'}
            />
          </div>
        )}
        {image && (
          <Image
            className="hero-image mb-4"
            src={image}
            alt={imageAlt}
            caption={imageCaption}
          />
        )}
      </header>
    )}
  </Transition>
);

export default Hero;
