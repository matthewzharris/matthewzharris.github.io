import React from 'react';
import Carousel from 'nuka-carousel';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import taggingSketchImage from '../../images/taggingsketch.jpeg';
import taggingWireframeImage from '../../images/taggingwireframe.jpg';
import taggingHighFidelityImage from '../../images/tagginghighfidelity.jpg';
import taggingCESketch1Image from '../../images/taggingcesketch1.jpeg';
import taggingCESketch2Image from '../../images/taggingcesketch2.jpeg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Tagging">
      <p>
        During ethnographic research, it became clear that it is difficult and
        time consuming to understand what is driving performance of their
        marketing portfolio. In order to allow marketers to evaluate their
        marketing portfolio, they need the ability to tag their ads based on
        their marketing initiatives and concepts so they can track, evaluate,
        and optimize their portfolio based on trends and patterns.
      </p>
      <Image alt="Tagging Sketch" src={taggingSketchImage} />
      <Image alt="Tagging Wireframe" src={taggingWireframeImage} />
      <Image
        alt="Tagging High Fidelity Mockup"
        src={taggingHighFidelityImage}
      />
    </SubSection>

    <hr />

    <SubSection title="Extending Tagging to Creative Explorer">
      <p>
        From research, it was clear that the tagging functionality needed to be
        included in Creative Explorer so that users could see their ad
        performance based on their own concepts. For this work, I wanted to
        focus on a cohesive experience across the platform.
      </p>
      <p>
        I began by sketching design solutions that would allow users to click
        into their ads to view, add and/or remove their tags. From this
        exploration, it was clear that there was enough information that a new
        modal was required.
      </p>
      <Image alt="Tagging Sketch" src={taggingCESketch1Image} />
      <Image alt="Tagging Sketch" src={taggingCESketch2Image} />
    </SubSection>
  </Section>
);

export default Ideation;
