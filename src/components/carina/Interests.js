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
          Having designed reporting for Health and Human Services, I have
          passion for the healthcare space.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            📝
          </span>
        </div>
        <h4>Product Strategy</h4>
        <p>
          Having worked in technology consulting, I have a unique end-to-end
          perspective on designing software products. I thrive on collaborating
          across disciplines to ensure the best product outcome possible.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Book" style={{ fontSize: '40px' }}>
            📖
          </span>
        </div>
        <h4>Design Narrator</h4>
        <p>
          My strength lies in communicating design. I tirelessly advocate for
          users, working to solve their problems while framing it in terms of
          broader business goals.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
