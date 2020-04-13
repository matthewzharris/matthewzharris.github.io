import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import prioritizeImage from '../../images/p4prioritization.jpg';
import userflowImage from '../../images/cueflow.png';
import paperPrototypeImage from '../../images/p4paperprototype.jpg';
import eventFlowImage from '../../images/p4createeventflow.jpg';
import eventChatImage from '../../images/p4eventchatflow.jpg';
import eventETAImage from '../../images/p4etaflow.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Initial Design">
      <p>
        After the market and user research, we met with the founders to showcase
        our findings and begin a prioritization of features for the new app. I
        used the MOSCOW method to prioritze the features and define the future
        vision for Cue.
      </p>
      <Image src={prioritizeImage} alt="Prioritization" />

      <p>
        There were two key user flows required by the app including creating an
        event and accepting an invite to an event. Based on the current app, I
        included chat and sharing ETA to streamline their user flows.
      </p>
      <Image src={userflowImage} alt="Cue User Flows" />

      <p>
        I led a design studio after initial sketches to get ideas from the
        entire team to see how everyone was thinking about the potential
        interaction and visual design.
      </p>
      <Image src={paperPrototypeImage} alt="Paper Prototype" />
    </SubSection>

    <hr />

    <SubSection title="Low Fidelity Wireframes">
      <p>
        By developing higher fidelity but preliminary version of wireframes, I
        was able to workout some of the issues that we wanted to address.
      </p>
      <p>
        On the home screen, I decided to stick with the standard add button
        design pattern so that it would be easier for users to understand how to
        quickly create events.
      </p>
      <Image src={eventFlowImage} alt="Low Fidelity Wireframes" />
      <p>
        For chatting with event attendees, the major issue was the difficulty
        finding the feature in the intial app. After wireframing, I found that
        it was still too difficult to chat and changed event chats to be the app
        landing screen.
      </p>
      <Image src={eventChatImage} alt="Event Chat Flow" />
      <p>
        For the ETA flow, I created a simple dialog box when setting up the app
        to explain what the feature is and ease privacy concerns. With the new
        Auto ETA, I wanted the ability for users to change that setting to be
        on/off as well as change the amount of time before it would allow ETA to
        be shared. In the event details, I included an ETA opt out at the
        request of our client.
      </p>
      <Image src={eventETAImage} alt="Event ETA Flow" />
      <p>The researcher conducted 2 usability tests and found:</p>
      <ul>
        <li>Enable ETA permissions dialog box is unclear</li>
        <li>‘Archive’ and ‘Alerts’ terminology was confusing</li>
        <li>
          Unclear that tapping the event card in chat leads to event details
        </li>
      </ul>
    </SubSection>
  </Section>
);

export default Ideation;
