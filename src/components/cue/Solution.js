import React from 'react';
import Carousel from 'nuka-carousel';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import designsysystem1Image from '../../images/CueDesignSystem1.jpg';
import designsysystem2Image from '../../images/CueDesignSystem2.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Design System">
      <p>
        For the Cue brand, I developed a design system by researching common
        styles and design patterns from the messaging and calendar mobile app
        market. The purpose of the design system for this project was to address
        the concerns that I discovered in the research phase:{' '}
        <strong>
          outdated, inconsistent, and distracting visual elements.
        </strong>{' '}
        With the design system, I wanted to ensure that the app founders had a
        common design language to continue building the Cue brand into the
        future.
      </p>
      <Carousel
        defaultControlsConfig={{
          nextButtonText: '>',
          prevButtonText: '<',
        }}
      >
        <Image src={designsysystem1Image} alt="Styles" />
        <Image src={designsysystem2Image} alt="Components" />
      </Carousel>
    </SubSection>

    <hr />

    <SubSection title="High Fidelity Wireframes">
      <p>
        <p>
          Below is the main flow that was created for usability where a user
          would create an event.
        </p>
      </p>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/vu2ydyvb766c43s/Cue%20-%20Create%20Event.mp4?raw=1"
        />
      </div>

      <p>
        The two other major flows of messaging and sharing your ETA are both an
        easy selection for the user. A user just clicks into the message from
        the homepage or navigates from the calendar to chat. From the calendar
        view, the user can share their ETA when they leave for the event;
        pairing this with a notification to users to share prior to the event is
        especially powerful.
      </p>
      <Video
        width="100%"
        src="https://www.dropbox.com/s/ldvzx789hcvnkfr/Cue%20Chat%20Flow.mov?raw=1"
      />
    </SubSection>

    <hr />

    <SubSection title="Usability Findings">
      <p>We received the following final usability test findings:</p>
      <ul>
        <li>
          <strong>Users wanted to know who created the event</strong> - I
          updated the calendar to show users who created the event
        </li>
        <li>
          <strong>
            Event creators wanted to know who accepted the invite.
          </strong>{' '}
          - I updated the calendar to show users who had accepted the event
          invite.
        </li>
        <li>
          <strong>
            Sharing user's estimated time arrival (ETA) was confusing
          </strong>{' '}
          - I updated the ETA feature to just be a button that a user would
          select prior to each event.
        </li>
      </ul>
    </SubSection>
  </Section>
);

export default Solution;
