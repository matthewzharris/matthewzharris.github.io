import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import SHHstyleguideImage from '../../images/SHHstyleguide.jpg';
import finalmockupImage from '../../images/SHHfinalmockup.jpg';
import finaldetailImage from '../../images/SHHfinaldetail.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Visual Design">
      <p>
        For the project, I crafted a visual design for the website and created a
        style guide that was utilized by the developer.
      </p>

      <Image alt="Style Guide" src={SHHstyleguideImage} />
    </SubSection>

    <hr />

    <SubSection title="Final Designs">
      <p>
        From low fidelity wireframes, I learned that I wanted to design a
        card-like format that would allow for pictures and text. Adding pictures
        helped to respond to user feedback about more visual cues to help choose
        a happy hour. The card design also allowed for more restaurants to be on
        display at a time, which helped reduce the need for scrolling and
        increase the scannability of the page.
      </p>
      <Image src={finalmockupImage} alt="Home Mockup" />
      <p>
        The restaurant detail pages underwent a number of iterations. Overall,
        it was incredibly important that the visual hierarchy of the page was
        clear to the user. I continually refined the information architecture of
        the page so that information could be scanned quickly.
      </p>
      <Image src={finaldetailImage} alt="Detail Page Mockup" />
      <p>
        I created a clickable prototype to help test the design and give the
        developer collateral to work from.
      </p>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/w434so11b97ijxt/SHHShortened.mp4?raw=1"
        />
      </div>
    </SubSection>
  </Section>
);

export default Solution;
