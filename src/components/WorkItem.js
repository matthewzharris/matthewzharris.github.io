import React from 'react'
import Link from 'gatsby-link'

import './WorkItem.css'

const WorkItem = ({ image, link, title, subtitle, cover = true }) => (
  <Link to={link}>
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: cover ? 'cover' : 'contain',
      }}
      className="d-flex flex-column justify-content-end align-items-end p-3 work-item-img work-item-img-cue"
    >
      <div className="work-content">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <div className="work-accent" />
      </div>
    </div>
  </Link>
)

export default WorkItem
