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
