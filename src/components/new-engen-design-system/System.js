import React from 'react';

import Section, { SubSection } from '../Section';
import Image from '../Image';

import colorsImage from '../../images/Color.jpg';
import spacingImage from '../../images/Spacing.jpg';
import buttonImage from '../../images/Buttons.jpg';
import modalsImage from '../../images/Modals.jpg';
import tablesImage from '../../images/Tables.jpg';
import navigationImage from '../../images/Navigation.jpg';

const System = () => (
  <Section shade={3} title="The System">
    <SubSection title="Aritfacts">
      <p>
        Based on some of the work in Brad Frost's{' '}
        <a
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
        >
          Atomic Design
        </a>
        , I decided we would structure our design system into Styles, Components
        and Patterns which closely mirrors atoms, molecules and organisms in his
        book.
      </p>
      <p>
        This organizational structure would then be consistently applied to the
        following deliverables:
      </p>
      <ul>
        <li>
          Shared Figma library used by the UX team to create high fidelity
          designs
        </li>
        <li>
          Centralized documentation that would act as a single source of truth
          for design and engineering
        </li>
        <li>Front end library in Storybook</li>
      </ul>
      <p>
        What follows is a sampling of each of these concepts in the new New
        Engen Design System.
      </p>
    </SubSection>

    <hr />

    <SubSection title="Styles">
      <Image alt="Spacing in the Design System" src={spacingImage} />
      <Image alt="Colors in the Design System" src={colorsImage} />
    </SubSection>

    <hr />

    <SubSection title="Components">
      <Image alt="Buttons in the Design System" src={buttonImage} />
      <Image alt="Modals in the Design System" src={modalsImage} />
    </SubSection>

    <hr />

    <SubSection title="Patterns">
      <Image alt="Tables in the Design System" src={tablesImage} />
      <Image alt="Navigation in the Design System" src={navigationImage} />
    </SubSection>
  </Section>
);

export default System;
