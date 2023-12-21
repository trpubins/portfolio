/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              My name is Tanner, and I&apos;m based in Phoenix, Arizona. &nbsp;
              <span role="img" aria-label="desert">
                🏜️
              </span>
            </p>
            <br />
            <p>
              I design, develop and deploy software systems that are highly available, scalable and
              secure. My objective is always to architect loosely coupled software so that it can
              rapidly evolve as clients&apos; needs change.
            </p>
            <br />
            <p>Here are a few technologies I&apos;m proficient in:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src="/avatar.jpeg" alt="Avatar" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
