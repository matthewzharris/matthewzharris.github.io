import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import prioritizeImage from '../../images/p4prioritization.jpg';
import designStudioImage from '../../images/p4designstudio1.jpg';
import paperPrototypeImage from '../../images/p4paperprototype.jpg';
import eventFlowImage from '../../images/p4createeventflow.jpg';
import eventChatImage from '../../images/p4eventchatflow.jpg';
import eventETAImage from '../../images/p4etaflow.jpg';

const Ideation = () => (
  <Section shade={2} title="Ideation">
    <SubSection title="Initial Design">
      <p>
        After creating a list of features to respond to our research, we used
        the MoSCoW method to prioritize features that helped define our Cue's
        vision.
      </p>
      <Image src={prioritizeImage} alt="Prioritization" />

      <p>
        After initial sketches, I led a design studio to explore the flow of
        information and interface of our features. I wanted to explore how to be
        “chat first” (something that the client saw as important) while
        maintaining the primary focus on creating/managing events.
      </p>
      <Image src={designStudioImage} alt="Design Studio" />
    </SubSection>

    <hr />

    <SubSection title="Paper Prototype">
      <p>
        I then created a paper prototype to test the designs of the high-level
        information architecture and user flows.
      </p>
      <Image src={paperPrototypeImage} alt="Paper Prototype" />
      <p>From usability testing, we found:</p>
      <ul>
        <li>Event creation screen language confusing</li>
        <li>Unsure if event was created</li>
        <li>Tab bar doesn’t make sense</li>
        <li>Event accept/decline icons confusing</li>
      </ul>
    </SubSection>

    <hr />

    <SubSection title="Low Fidelity Wireframes">
      <p>From paper to low fi wireframes, the iteration was pretty dramatic.</p>
      <p>
        On the home screen, I removed the tab bar and replaced it with a filter
        for scheduled/unscheduled events to help simplify the information
        architecture. I went back to the standard + sign in the bottom corner
        for the easy event creation for Jill. I included an Archive of past
        events to help our persona create events from past groups.
      </p>
      <Image src={eventFlowImage} alt="Low Fidelity Wireframes" />
      <p>
        For the event chat flow, the major update was the streamlined user flow
        for a 1 click to land into the chat. I also included the ability to
        accept the invite from the specific event screen.
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
