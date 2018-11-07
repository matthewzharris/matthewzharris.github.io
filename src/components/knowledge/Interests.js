import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Industry" style={{ fontSize: '40px' }}>
            💻
          </span>
        </div>
        <h4>Software Development Lifecycle</h4>
        <p>
          I’ve worked in software development capacities including helping
          organize releases, developing requirements, creating user stories,
          test and respond to user feedback.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Globe" style={{ fontSize: '40px' }}>
            😁
          </span>
        </div>
        <h4>User Experience</h4>
        <p>
          From user interviews to wire-framing and final prototyping, I’ve had a
          hand in defining product and project direction.
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
