import React, { Component } from 'react';
import { Transition, config } from 'react-spring';

import './Hero.css';

import Image from './Image';

const scrollToNextSection = () => {
  const workSection = document.getElementById('work');
  if (workSection) {
    workSection.scrollIntoView({ behavior: 'smooth' });
  }
};

class Hero extends Component {
  state = {
    showIndicator: true
  };

  componentDidMount() {
    if (this.props.showScrollIndicator) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      this.setState({ showIndicator: heroBottom > 100 });
    }
  };

  render() {
    const { title, subtitle, image, imageAlt, imageCaption, portrait, portraitAlt, showScrollIndicator, customClassName, children } = this.props;
    const { showIndicator } = this.state;

    return (
      <Transition config={config.slow} from={{ opacity: 0 }} enter={{ opacity: 1 }}>
        {(styles) => (
          <div className={showScrollIndicator ? 'hero-section' : ''}>
            <header style={styles} className={`container mt-6 ${customClassName || 'mb-6'} ${portrait ? 'hero-with-portrait' : 'd-flex flex-column'}`}>
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
            {showScrollIndicator && (
              <div className={`scroll-indicator-wrapper ${showIndicator ? '' : 'hidden'}`}>
                <button className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to next section">
                  <span className="scroll-text">SCROLL</span>
                  <svg className="scroll-chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </Transition>
    );
  }
}

export default Hero;
