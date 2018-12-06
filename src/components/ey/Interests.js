import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            🏭
          </span>
        </div>
        <h4>Cross-Industry Research & Design</h4>
        <p>
          I’ve led workshops with executives and managers across industries to
          define user and business requirements for digital products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            😁
          </span>
        </div>
        <h4>UX Design</h4>
        <p>
          I’ve led end-to-end UX projects with multiple designers from research
          to prototyping using tools tools like persona creation, journey
          mapping, user flows and interviews.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Book" style={{ fontSize: '40px' }}>
            👨‍💻
          </span>
        </div>
        <h4>Interest in emerging technology</h4>
        <p>
          As a self professed tech geek, I am constantly learning and growing my
          skill set to include emerging technology like IoT, VR/AR, and voice
          user interfaces.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
