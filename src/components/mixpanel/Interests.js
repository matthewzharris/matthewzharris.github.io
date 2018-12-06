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
        <h4>Business Analytics</h4>
        <p>
          Having worked in technology consulting on analytics products, I have
          intimate knowledge with the pain points of analytics software tools. I
          have a personal goal to improve those products to be just as simple
          and beautiful as consumer products.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Memo" style={{ fontSize: '40px' }}>
            🎬
          </span>
        </div>
        <h4>Passion for the Mixpanel Mission</h4>
        <p>
          I’m truly excited about Mixpanel’s core product to deliver user
          insights to companies in order to help them improve the user
          experience. The product blends my interest of UX design and analytics
          into a single product.
        </p>
      </div>
      <div className="col-md text-center">
        <div className="mb-1">
          <span role="img" aria-label="Book" style={{ fontSize: '40px' }}>
            💡
          </span>
        </div>
        <h4>Beautiful, Simple Visual Design</h4>
        <p>
          I temper beautiful visual design with simple and intuitive information
          architecture to deliver an easily accessible experience.
        </p>
      </div>
    </div>
  </section>
);

export default Interests;
