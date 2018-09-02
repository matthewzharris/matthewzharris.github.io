import React from 'react'

import './Section.css'

export const SubSection = ({ title, children }) => (
  <div className="row">
    <div className="col-sm">
      <h3>{title}</h3>
      {children}
    </div>
  </div>
)

const Section = ({ shade = 0, title, children }) => (
  <section className={`pt-5 pb-5 section-${shade}`}>
    <div className="container section-content">
      <div className="row">
        <div className="col-sm">
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </section>
)

export default Section
