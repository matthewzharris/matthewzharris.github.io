import React, { Fragment } from 'react'

import Section, { SubSection } from '../Section'
import Image from '../Image'

import personaImage from '../../images/hackathonpersona.jpg'

const Research = () => (
  <Section shade={1} title="Research">
    <SubSection title="User Research">
      <p>
        We did an informational interview with one person in Seattle that had
        experience with wanting to recycle different items from their home. We
        gathered their pain points and quickly created a proto-persona to design
        for.
      </p>
    </SubSection>

    <hr />

    <SubSection title="Persona">
      <p>
        Steve Jones lives with his family in Ballard that he bought a few years
        ago. They regularly maintain and enjoy “spring cleaning” a couple of
        times a year, which can produce a lot of items for recycling. John wants
        to be able to recycle his household items in an environmentally friendly
        way, but doesn’t know how to find that information easily
      </p>
      <Image src={personaImage} alt="Persona" />
    </SubSection>
  </Section>
)

export default Research
