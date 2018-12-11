import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            🏥
          </span>
        </div>
        <h4>Healthcare Experience</h4>
        <p>
          Having designed data visualization dashboards and reports for Health
          and Human Services, I have passion for design in the healthcare space.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            💼
          </span>
        </div>
        <h4>Enterprise Software Background</h4>
        <p>
          I’ve led end-to-end UX projects with multiple designers from research
          to prototyping using tools tools like persona creation, journey
          mapping, user flows and interviews.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Book" style={{ fontSize: '40px' }}>
            📖
          </span>
        </div>
        <h4>Design Narrative</h4>
        <p>
          My strength lies in communicating design, advocating for users while
          framing it in terms of broader business goals.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
