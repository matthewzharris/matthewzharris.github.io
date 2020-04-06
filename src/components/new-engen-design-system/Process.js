import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import teamImage from '../../images/designsystemteam.png';
import slackComms from '../../images/slackcomms.png';

const Process = () => (
  <Section shade={2} title="Process Improvements">
    <SubSection title="Cross-Functional Design System Team">
      <p>
        With the support of the Director of UX, I was able to allocate some of
        my own time on an ongoing basis to this effort. Likewise, I met with the
        engineering team and identified a point person and a few others that
        were interested and could contribute.
      </p>
      <Image alt="Design System Team" src={teamImage} />
    </SubSection>

    <hr />

    <SubSection title="Communication Touchpoints">
      <p>
        With a team of contributors and stakeholders identified, we needed a
        forum to discuss implementation and iteration. I created two channels
        for these discussions:
      </p>
      <ul>
        <li>
          A weekly sync to run through open questions and identify next steps
        </li>
        <li>A Slack channel for async and ad hoc decision making</li>
      </ul>
      <Image alt="Design System Slack communication" src={slackComms} />
    </SubSection>

    <hr />

    <SubSection title="System Iteration">
      <p>
        In order to fully embrace our "only build what we need" principle, I
        created a process that the team could follow when evaluating new
        components or component iteration opportunities.
      </p>
      <iframe
        title="Design System Iteration Process on Whimsical"
        style={{ border: 'none' }}
        width="100%"
        height="400"
        src="https://whimsical.com/embed/NJ8qF3gyHMHtSXFsxcwsKz"
      ></iframe>
    </SubSection>
  </Section>
);

export default Process;
