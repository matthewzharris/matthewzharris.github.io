import React from 'react';

const Interests = () => (
  <section className="container mt-5 mb-5" id="about">
    <div className="row">
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Hospital" style={{ fontSize: '40px' }}>
            👥
          </span>
        </div>
        <h4>Commitment to Users</h4>
        <p>
          I appreciate Amazon’s obsessive customer focus. For me, UX design is
          that obsession put into practice to deliver the best experience bar
          none.
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
