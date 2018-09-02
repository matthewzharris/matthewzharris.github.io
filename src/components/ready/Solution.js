import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import siteMapImage from '../../images/p3finalsitemap.jpg';
import styleguideImage from '../../images/p3styleguide.jpg';
import introScreenImage from '../../images/p3introscreens.jpeg';
import alertImage from '../../images/p3alertflow.jpg';
import resourceFlowImage from '../../images/p3resourcesflow.jpg';

const Solution = () => (
  <Section shade={3} title="Solution">
    <SubSection title="Final Sitemap">
      <p>
        As lead information architect, I wanted to focus on having as few
        screens as possible and focus on responding to the needs of the persona
        and our client. While the current website had a lot of information, not
        all of it was pertinent to disaster preparation and made little sense to
        include in a mobile app. In the sitemap visual, you can see the last
        iteration of the mobile app information architecture. There are a few
        major changes:
      </p>
      <ul>
        <li>
          Settings was moved from the Navigation bar to the Tab bar due to the
          fact it was found to be confusing whether it was page-specific or
          universal.
        </li>
        <li>
          I standardized the terminology to “Go Bag” for the disaster
          preparation checklist screen. This also had bearing on the visual
          design as well.
        </li>
        <li>
          The map was simplified to remove filters after paper prototype testing
          since they weren't important to our persona and caused confusion to
          users.
        </li>
        <li>
          The Info screen was renamed to Resources and the section was
          re-categorized to remove the separate Resources dropdown.
        </li>
      </ul>
      <Image alt="Final Sitemap" src={siteMapImage} />
    </SubSection>

    <hr />

    <SubSection title="Visual Design">
      <p>
        Currently, the brand of Seattle Emergency Management doesn’t really
        exist in any sense of colors, iconography or consistent imagery so I
        started from scratch when creating the ReadySeattle brand. As the lead
        in visual design, I began by researching Apple’s Human Interface
        Guidelines (HIG) to ensure that the app design aligned with iOS
        standards.
      </p>
      <Image alt="Styleguide" src={styleguideImage} />
      <p>
        For the primary logo, I was inspired by a disaster preparation
        infographic from our client of an emergency bag. After some research, I
        found out that the emergency go bag was a universal image of emergency
        readiness, which was fitting for our app vision. I created some
        secondary logos sans the icon to be used in the app and by our client.
        The color palette was chosen by researching earthquake alert colors and
        then choosing slightly brighter, happier shades to be appealing to
        users. From the HIG, I determined that we should use the iOS system font
        family of San Francisco which focused on readability and scannability
        (important factors from our comparative analysis). The iconography was
        influenced by some icons that our client had used in the past but was
        updated with our ReadySeattle brand colors.
      </p>
    </SubSection>

    <hr />

    <SubSection title="High Fidelity Wireframes">
      <p>
        With our style guide complete, I created our loading screen and
        emergency alert notification screen for when a user first enter the app.
        For usability tests, we went through 3 major flows through the app.
      </p>
      <Image alt="Intro Screens" src={introScreenImage} />
      <p>
        After entering, the user lands immediately on the Alerts page where they
        can view alerts and the time they were issued. To respond to user
        feedback, arrows let users know its clickable to see additional alert
        details. They can click the hyperlink I created to see the alert on the
        map. In response to users, I created a legend on the map to provide
        context for the pins.
      </p>
      <Image alt="Alert Flow" src={alertImage} />
      <p>
        The Go Bag flow is where users collect materials for emergencies. Here,
        I added a description of the Go Bag to help inform our users of its
        meaning. I also provided them with a responsive visualization as they
        added items to their Go Bag as the bag is filled it will look more like
        the final app logo.
      </p>
      <div className="text-center">
        <video width="30%" autoPlay loop muted>
          <source
            src="https://media.giphy.com/media/55ocWdRjmf1OO2PlAd/giphy.mp4"
            type="video/mp4"
          />{' '}
          Your browser does not support the video tag.
        </video>
      </div>
      <p>
        For the final flow about emergency resources, I renamed the “Info”
        screen to “Resources” based on where users were navigating for natural
        disaster information.
      </p>
      <Image alt="Resource Flow" src={resourceFlowImage} />
    </SubSection>

    <hr />

    <SubSection title="Usability Testing Findings">
      <p>We received the following final usability test findings:</p>
      <ul>
        <li>Users expected a back button on Go Bag and Alert screens</li>
        <li>
          Upon first visit, the Show Current Bag button should be grayed out
        </li>
        <li>Alert titles in feed need to be more specific</li>
        <li>Visualize disasters on map as shaded regions</li>
      </ul>
    </SubSection>
  </Section>
);

export default Solution;
