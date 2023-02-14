import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Modern, professional front-end developer</SectionText>
      <Button>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;