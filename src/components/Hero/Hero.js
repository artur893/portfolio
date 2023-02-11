import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main>
        Welcome to <br />
        my portfolio
      </SectionTitle>
      <SectionText>Modern, professional front-end developer</SectionText>
      <Button>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;