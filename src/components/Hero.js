import React from 'react'
import { Transition, config } from 'react-spring'

import './Hero.css'

import Image from './Image'

const Hero = ({ title, subtitle, image, imageAlt, imageCaption, children }) => (
  <Transition config={config.slow} from={{ opacity: 0 }} enter={{ opacity: 1 }}>
    {styles => (
      <header
        style={styles}
        className="container d-flex flex-column align-items-center text-center mt-6 mb-6"
      >
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
        {children}
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
)

export default Hero
