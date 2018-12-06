import React, { Fragment } from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';
import Video from '../Video';

import styleguideImage from '../../images/p4styleguide.jpg';
import signInImage from '../../images/p4signin.jpg';
import finalEventChatImage from '../../images/p4finaleventchatflow.jpg';
import finalETAImage from '../../images/p4finaletaflow.jpg';
import usabilityImage from '../../images/p4usabilityfindings.jpg';
import deliverablesImage from '../../images/p4deliverables.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Visual Design">
      <p>
        For the Sprinklr brand, I created the visual design with a focus on a
        modern, clean interface that would allow the plants to be the highlight
        of the app. In addition, I wanted to have some illustrative elements and
        drawn icons to add brevity to the mobile app. I chose the Futura
        typeface for headers which was inspired by the "Field Notes" brand
        notebooks where a user interviewee stored their plant information.
      </p>
      <Image src={styleguideImage} alt="Styleguide" />
    </SubSection>

    <hr />

    <SubSection title="High Fidelity Wireframes">
      <p>
        With the visual design standards complete, I applied the designs to the
        wireframes.
      </p>
      <Image src={signInImage} alt="Sign In" />
      <p>
        For the high fidelity prototype, I used the secondary blue color for any
        clickable buttons and links throughout the app. In response to usability
        testing, I used a History instead of an Archive icon and used a
        notifications bell icon. In the third event screen, I added the See
        Event action so that it was obvious that they were clickable. I also
        included quick information about the event to help Jill get those
        details quickly. In the final screen, I added feedback for the user that
        the event has been created.
      </p>
      <div className="text-center">
        <Video
          width="30%"
          playbackRate={3}
          src="https://media.giphy.com/media/1ivFhqQkRuUykAenuv/giphy.mp4"
        />
      </div>

      <p>
        In the Event Chat flow, a user clicks “See Event” to navigate to the
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
  </Section>
);

export default Solution;
