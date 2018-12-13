import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            🕵️
          </span>
        </div>
        <h4>Research-Driven</h4>
        <p>
          No matter the platform or product, I believe that complete immersion
          to understand the user creates optimal products. On my UX projects,
          I’ve led user interviews and contextual inquiries to help gain
          insights for the design of solutions.
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
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            🎬
          </span>
        </div>
        <h4>Bias for Action</h4>
        <p>
          As a designer with a background in business, I’m inclined to stand up
          and take action in any team. I believe that action delivers results
          and iteration on those results helps create success.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
