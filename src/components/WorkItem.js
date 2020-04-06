import React from 'react';
import Link from 'gatsby-link';

import './WorkItem.css';

const WorkItem = ({ image, link, title, subtitle, cover = true, bgSize }) => (
  <Link to={link}>
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: bgSize ? bgSize : cover ? 'cover' : 'contain',
      }}
      className="d-flex flex-column justify-content-end align-items-end p-3 work-item-img work-item-img-cue"
    >
      <div className="work-content">
        <h3>{title}</h3>
        <small>{subtitle}</small>
        <div className="work-accent" />
      </div>
    </div>
  </Link>
);

export default WorkItem;
