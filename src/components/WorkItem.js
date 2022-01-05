import React from 'react';
import Link from 'gatsby-link';

import './WorkItem.css';

const WorkItemWrapper = ({ to, href, children }) => {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank">
      {children}
    </a>
  );
};

const WorkItem = ({
  image,
  link,
  title,
  subtitle,
  cover = true,
  bgSize,
  bgColor,
  href,
}) => (
  <WorkItemWrapper to={link} href={href}>
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: bgSize ? bgSize : cover ? 'cover' : 'contain',
        ...(bgColor ? { backgroundColor: bgColor } : null),
      }}
      className="d-flex flex-column justify-content-end align-items-end p-3 work-item-img work-item-img-cue"
    >
      {title || subtitle ? (
        <div className="work-content">
          <h3>{title}</h3>
          <small>{subtitle}</small>
          <div className="work-accent" />
        </div>
      ) : null}
    </div>
  </WorkItemWrapper>
);

export default WorkItem;
