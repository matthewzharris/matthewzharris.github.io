import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            💼
          </span>
        </div>
        <h4>Enterprise Software</h4>
        <p>
          Having worked in technology consulting, I am painfully aware of the
          neglect business users often feel. I have a personal goal to make
          business software just as simple and beautiful as consumer products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            😁
          </span>
        </div>
        <h4>End to End UX Experience</h4>
        <p>
          From research to wireframing to prototyping, I have full end-to-end UX
          project experience in delivering successful user-centered designs.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Book" style={{ fontSize: '40px' }}>
            💡
          </span>
        </div>
        <h4>Invent and Simplify</h4>
        <p>
          When designing, I use research to develop as many features as possible
          to meet and exceed user needs. Filtering those features into an MVP
          that is still innovative is an exciting process for me.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
