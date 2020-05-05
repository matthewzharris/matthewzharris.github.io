import React from 'react';

import Section from '../Section';
import Image from '../Image';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <div className="row mb-4">
      <div className="col-sm">
        <h3>Next Steps</h3>
        <p>
          The offshore dev team is currently building the redesigned app &
          website.
        </p>
      </div>
    </div>
    <blockquote>
      "Matt is an extremely talented UX Designer and we are very pleased with
      his work. We hired Matt to redesign our travel app and website,
      Globespinning, which was no small task. He listened to all of our needs
      and immediately dove right in. Matt thoroughly researched our competition
      while prioritizing our user’s requests and feedback to enhance their
      experience. He always kept our company vision and goals top of mind every
      step of the way. I appreciate Matt’s attention to detail, clear
      communication with our Globespinning leadership team (both verbally and
      visually), his openness to feedback, and never missing a deadline. Matt’s
      creative talents and hard work have taken our app to the next level and we
      are very happy that we hired him for the job." <br />
      <br />- Amy Boes, CEO & Co-Founder of Globespinning
    </blockquote>
  </Section>
);

export default Reflections;
