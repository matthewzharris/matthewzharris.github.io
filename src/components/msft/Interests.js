import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Laptop" style={{ fontSize: '40px' }}>
            💻
          </span>
        </div>
        <h4>Passion for Microsoft</h4>
        <p>
          As a tech enthusiast, I am extremely excited by the culture of design
          and forward thinking strategy of Microsoft. My values of innovation
          and hunger for success align with what Microsoft delivers to its
          customers across its products.
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
          <span role="img" aria-label="Briefcase" style={{ fontSize: '40px' }}>
            💼
          </span>
        </div>
        <h4>Business Software</h4>
        <p>
          Having worked in technology consulting, I am painfully aware of the
          neglect business users often feel. I have a personal goal to make
          business software just as beautiful and easy to use as consumer
          products.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
