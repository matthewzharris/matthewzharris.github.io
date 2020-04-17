import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import spendTrackerPersonaImage from '../../images/spendtrackerpersona.png';
import activityFlowImage from '../../images/spendtrackeractivityflowdiagram.png';
import budgetComplexityImage from '../../images/budgetcomplexity.png';

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="Evaluative Research">
      <p>
        Since another designer implemented the initial Creative Explorer tool, I
        led the usability testing efforts with users to identify any gaps in the
        tool in both feature and design. I wrote an interview guide that would
        be used with our participants to standardize our research results. I
        then recruited and organized interviews.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h4>Objective</h4>
          <p>
            Determine the usability of Creative Explorer in terms of
            learnability and satisfaction
          </p>
        </div>
        <div className="col-md-6">
          <h4>Participants</h4>
          <p>4 marketers with small/medium sized business experience</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>Persona</h4>
          <p>
            You are a marketing manager at a direct-to-consumer sunglasses
            company called Glance. Your marketing analyst recently launched a
            series of ads on Facebook for your Two for One Sunglasses promotion.
            You are interested in learning about how these ads are performing to
            see if you should rotate in new ads or keep spending on your current
            ads.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Tasks</h4>
          <ul>
            <li>Understand and interpret your ad performance</li>
            <li>
              Use search, filter and sorting functions to identify significant
              ads
            </li>
            <li>Change the data visualization from card to graph view</li>
            <li>Manipulate the graph to discover winning & losing ads</li>
          </ul>
        </div>
      </div>
      <a href="/Creative Explorer Interview Guide.pdf" target="_blank">
        Creative Explorer Interview Guide
      </a>
    </SubSection>

    <hr />

    <SubSection title="Takeaways">
      <p>
        There were a number of takeaways from our research that you can view
        here. The major takeaway from our usability studies was the general need
        for increased ability to identify trends. This result was directly tied
        to another project that had initiated which was to create a tagging
        functionality.
      </p>
      <a href="/Creative Explorer Usability Study Results.pdf" target="_blank">
        Creative Explorer Usability Study Results
      </a>
    </SubSection>
  </Section>
);

export default Research;
