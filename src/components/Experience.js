import React from 'react';

import './Experience.css';

const Experience = () => (
  <section className="container mt-5 mb-5" id="experience">
    <div className="experience-grid">
      <div className="experience-column">
        <h3>Experience</h3>
        <div className="experience-list">
          <div className="experience-item">
            <h5 className="experience-company">Datadog</h5>
            <p className="experience-title">Product Design Manager // Senior Product Designer</p>
          </div>
          <div className="experience-item">
            <h5 className="experience-company">NGINX</h5>
            <p className="experience-title">Product Design Manager // Senior Product Designer</p>
          </div>
          <div className="experience-item">
            <h5 className="experience-company">New Engen</h5>
            <p className="experience-title">Product Designer</p>
          </div>
          <div className="experience-item">
            <h5 className="experience-company">Freelance</h5>
            <p className="experience-title">Product Designer</p>
          </div>
        </div>
        <a href="/Matt Harris Resume.pdf" download="Matt Harris Resume.pdf" className="download-resume-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </a>
      </div>
      <div className="selected-works-column">
        <h3>Selected Works</h3>
        <div className="selected-works-list">
          <a href="https://www.datadoghq.com/blog/manage-ai-cost-and-performance-with-datadog/" target="_blank" rel="noopener noreferrer" className="selected-work-card">
            <div className="selected-work-image" style={{backgroundImage: 'url(https://imgix.datadoghq.com/img/blog/manage-ai-cost-and-performance-with-datadog/datadog-ai-costs-hero.png?auto=format&fit=max&w=847)'}}></div>
            <span className="selected-work-title">Manage AI Cost and Performance</span>
          </a>
          <a href="https://www.datadoghq.com/blog/cloud-cost-management-finops/" target="_blank" rel="noopener noreferrer" className="selected-work-card">
            <div className="selected-work-image" style={{backgroundImage: 'url(https://imgix.datadoghq.com/img/blog/cloud-cost-management-finops/cloud-cost-management-finops-hero.png?auto=format&fit=max&w=847)'}}></div>
            <span className="selected-work-title">Cloud Cost Management for FinOps</span>
          </a>
          <a href="https://www.datadoghq.com/blog/cloud-cost-recommendations/" target="_blank" rel="noopener noreferrer" className="selected-work-card">
            <div className="selected-work-image" style={{backgroundImage: 'url(https://imgix.datadoghq.com/img/blog/cloud-cost-recommendations/cloud-cost-recommendations-hero.png?auto=format&fit=max&w=847)'}}></div>
            <span className="selected-work-title">Cloud Cost Recommendations</span>
          </a>
          <a href="https://www.datadoghq.com/blog/dashboards-notebooks-version-history/" target="_blank" rel="noopener noreferrer" className="selected-work-card">
            <div className="selected-work-image" style={{backgroundImage: 'url(https://imgix.datadoghq.com/img/blog/dashboards-notebooks-version-history/version-history_hero.png?auto=format&fit=max&w=847)'}}></div>
            <span className="selected-work-title">Dashboards & Notebooks Version History</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
