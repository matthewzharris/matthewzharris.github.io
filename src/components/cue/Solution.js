import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import styleguideImage from '../../images/p4styleguide.jpg';
import highfidelityImage from '../../images/p4highfidelity.jpg';
import finalEventChatImage from '../../images/p4finaleventchatflow.jpg';
import finalETAImage from '../../images/p4finaletaflow.jpg';
import usabilityImage from '../../images/p4usabilityfindings.jpg';
import deliverablesImage from '../../images/p4deliverables.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Visual Design">
      <p>
        For the Cue brand, I created a style guide by researching Material
        Design standards since my client requested an Android-first design. For
        the primary logo, I wanted to invoke the idea of events and chatting so
        I created a chat bubble from the C in Cue’s secondary logo and added a
        calendar icon. For the color palette, I updated the green color from our
        client and found a bright blue color for a secondary color for a
        brighter, modern look. I chose to use standard Android Roboto typeface
        and iconography for the app.
      </p>
      <Image src={styleguideImage} alt="Styleguide" />
    </SubSection>

    <hr />

    <SubSection title="High Fidelity Wireframes">
      <p>
        <Image src={highfidelityImage} alt="High Fidelity" />
        <p>
          With the style guide complete, I applied the visual designs to create
          an interactive prototype including motion design. I used the secondary
          blue color as a signifier for anything clickable like buttons and
          links in the app. In response to usability testing, I used a History
          icon and a Notification bell icon.
        </p>
        <p>
          Below is the main flow that was created for usability where a user
          would create an event.
        </p>
      </p>
      <div className="text-center">
        <Video
          width="100%"
          src="https://www.dropbox.com/s/l668u6nco7b4x12/Cue%20Prototype.mp4?raw=1"
        />
      </div>

      <p>
        In the Event Chat flow, a user clicks "SEE EVENT” to navigate to the
        specific event, where the user can accept events and chat with
        attendees.
      </p>
      <Image src={finalEventChatImage} alt="Final Event Chat" />

      <p>
        For the Auto-ETA feature, users can update the length of time globally
        in their Settings or turn it off locally per event in the Event Details
        screen.
      </p>
      <Image src={finalETAImage} alt="Final ETA Flow" />
    </SubSection>

    <hr />

    <SubSection title="Usability Findings">
      <p>We received the following final usability test findings:</p>
      <ul>
        <li>
          <strong>Participants unable to invite attendees</strong> - I created a
          toggle for event creators to allow participants to invite on the New
          Event screen.
        </li>
        <li>
          <strong>Developer feedback</strong> - I created a clickable hyperlink
          that would allow users to send app feedback.
        </li>
        <li>
          <strong>
            Unable to know who created event or see event attendance status
          </strong>{' '}
          - I updated the event cards to show users who created the event and
          who accepted the event invite.
        </li>
        <li>
          <strong>ETA language confusing</strong> - I updated the ETA language
          on the toggle to be a straightforward for users.
        </li>
      </ul>
      <Image src={usabilityImage} alt="Usability" />
    </SubSection>

    <SubSection title="Redlines & Annotations">
      <p>
        Since the developers on this project were remote, it was important for
        me to prepare detailed final deliverables for the client. The redlines
        gave the developers exact specs to use for reusable components like
        event cards. The detailed design annotations helped explain any
        interactive elements of the screen.
      </p>
      <Image
        src={deliverablesImage}
        alt="Redline and Annotation Deliverables"
      />
    </SubSection>
  </Section>
);

export default Solution;
