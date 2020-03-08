import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import HazelResearchImage from '../../images/HazelResearch.jpg';
import HeadofFoodSafetypersonaImage from '../../images/Head of Food Safety.jpg';
import FoodSafetySpecialistpersonaImage from '../../images/Food Safety Specialist.jpg';
import HazelHeuristicAnalysisImage from '../../images/HazelHeuristicAnalysis.jpg';

import HazelValue1Image from '../../images/HazelValue1.jpg';
import HazelValue2Image from '../../images/HazelValue2.jpg';
import HazelValue3Image from '../../images/HazelValue3.jpg';
import HazelValue4Image from '../../images/HazelValue4.jpg';


const Research = () => (
  <Section shade={1} title="Research">
    <Image alt="Hazel Research Process" src={HazelResearchImage} />
    <SubSection title="Stakeholder & Business Research">
      <p>
        To start the project, I immersed myself in the food safety industry by researching the market and conducting stakeholder interviews with
        Hazel Analytics employees. I believe that building relationships with stakeholders and an understanding of the industry is foundational to being able to communicate and design effectively.
      </p>
      <p>From this research, I learned:</p>
      <ul>
        <li>Users were only using a couple of the top level landing pages</li>
        <li>Users were unable to find features that they were most interested in like competitor analysis</li>
        <li>Users wanted more reporting flexbility to help communicate food safety performance</li>
      </ul>
    </SubSection>
    <hr />

    <SubSection title="User Research">
      <p>
        After being able to orient my understanding of the space, I synthesized user interviews about the current platform and
        developed a list of areas for potential improvement. Some of those
        insights from users included:
      </p>
      <ul>
        <li>General inability to find features in the platform</li>
        <li>
          Critical inspections and high frequency inspection facilities are the
          major causes for users to engage
        </li>
        <li>
          Jurisdictional and closure information are rarely important due to
          health department discrepancies and the inability for recourse after
          closures
        </li>
      </ul>
      <p>
        As a part of this process, I also worked to revamp existing personas
        with available information about current and future users.
      </p>
      <Image alt="Head of Food Safety" src={HeadofFoodSafetypersonaImage} />
      <Image
        alt="Food Safety Specialist"
        src={FoodSafetySpecialistpersonaImage}
      />
    </SubSection>

    <SubSection title="Heuristic Analysis">
      <p>
        Using my industry and user research, I was then able to effectively
        begin evaluating the current platform. While performing a heuristic
        analysis of the user flows and pages, I collected a list of UX changes
        to propose to the team including:
      </p>
      <Image alt="Heuristic Analysis" src={HazelHeuristicAnalysisImage} />
      <p>
        As a part of this analysis, I worked with the team to define a list of
        design principles that would be used to create the new unified platform.
        These principles were as follows:
      </p>
      <div className="row">
        <div className="col-md-6">
          <Image alt="Value Out of the Box" src={HazelValue1Image} />
        </div>
        <div className="col-md-6">
          <Image alt="Focus on Flexibility" src={HazelValue2Image} />
        </div>
        <div className="col-md-6">
          <Image alt="Vizualize Everything, Export Anything" src={HazelValue3Image} />
        </div>
        <div className="col-md-6">
          <Image alt="Bring Cohesiveness to the CX" src={HazelValue4Image} />
        </div>
      </div>
    </SubSection>
  </Section>
);

export default Research;
