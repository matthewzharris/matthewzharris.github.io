import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            📈
          </span>
        </div>
        <h4>Business Analytics</h4>
        <p>
          Having worked in technology consulting on analytics products, I am
          intimately familiar with the pain points of analytics software tools
          and have a personal goal to make them just as simple and beautiful as
          consumer products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            🚀
          </span>
        </div>
        <h4>Passion for the Mission</h4>
        <p>
          As a UX designer with a background in business, I’m truly excited
          about Mixpanel’s mission to deliver user insights to companies in
          order to help them improve user experience.
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
          I have a unique end-to-end perspective on designing software products.
          I thrive on collaborating across disciplines to ensure the best
          product outcome possible.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
