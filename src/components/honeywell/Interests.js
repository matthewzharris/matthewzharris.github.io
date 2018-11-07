import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Industry" style={{ fontSize: '40px' }}>
            🏭
          </span>
        </div>
        <h4>Cross Industry Design</h4>
        <p>
          I’ve designed visualizations across a number of industries including
          healthcare, energy and retail sectors, adapting to extremely diverse
          user needs.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            👨‍💻
          </span>
        </div>
        <h4>Emerging Technology</h4>
        <p>
          As a self professed tech geek, I am constantly learning and growing my
          skill set to include emerging technology like IoT, AR, and Voice.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
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
