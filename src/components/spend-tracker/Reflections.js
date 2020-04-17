import React from 'react';

import Section from '../Section';

const Reflections = () => (
  <Section title="Reflections" shade={4}>
    <p>
      For this project, the hardest part was understanding how we could scope
      the project to deliver on our user needs while keeping the cost palatable
      for the team. One of the hardest decisions was to leave out automated
      campaign starting or pausing based on budgets–a feature we strongly
      believed would add value, but was a large engineering effort. By focusing
      our solution on the research, we could design for the common case scenario
      with ample room to add flexibility in future versions.
    </p>
  </Section>
);

export default Reflections;
