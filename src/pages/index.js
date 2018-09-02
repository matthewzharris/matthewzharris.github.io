import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'

const IndexPage = () => (
  <div>
    <Hero title="matt harris">
      <p>
        I’m a UX Designer who loves creating beautiful, simple experiences for
        users
      </p>
    </Hero>
    <Work />
    <About />
  </div>
)

export default IndexPage
