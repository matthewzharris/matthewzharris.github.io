import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import logo1Image from '../../images/hackathonlogo1.jpg';
import logo2Image from '../../images/hackathonlogo2.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Visual Design">
      <p>
        I developed a quick style guide that included the design for our logo
        and secondary logo. I wanted to use trees in the logo to tie to the
        “emerald city” of Seattle as well as the recycling sign to help inform
        our users. The secondary logo was made for presentation purposes. For
        the typography and style of the app, our developers were most
        comfortable with Material Design so I followed those standards for
        visual elements.
      </p>

      <Image alt="Hackathon Logo 1" src={logo1Image} />
      <Image alt="Hackathon Logo 2" src={logo2Image} />
    </SubSection>

    <hr />

    <SubSection title="Prototype">
      <p>
        With a prototype developed by our software engineers, I created a major
        task flow that would be completed by a user and used in our
        presentation. The user would land on our homepage that describes our
        mission. Then, the user would go to Guide page where they will be walked
        through how to recycle the item. From there, they click into the
        categories I created and select the specific item. They are then given a
        location entry form and provided with all the recycling centers that
        they can go to listed by distance from their location. Finally, clicking
        into the recycler provides the full details including restrictions and
        fees (if any) that they need to recycle.
      </p>
      <div className="text-center">
        <video width="80%" autoPlay loop muted>
          <source
            src="https://media.giphy.com/media/xjyZVbEwMlwgnKvpP1/giphy.mp4"
            type="video/mp4"
          />{' '}
          Your browser does not support the video tag.
        </video>
      </div>
    </SubSection>
  </Section>
);

export default Solution;
