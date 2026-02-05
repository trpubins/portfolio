/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import { jobs, skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const totYearsExp = jobs.reduce((total, item) => total + item.yearsSvc, 0).toFixed(1);

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
              secure. With {formatYearsExp(totYearsExp)} years of industry experience, I currently manage a team of
              software engineers at Pratt & Whitney architecting and developing cloud-native applications 
              that perform engineering analyses on jet engine hardware.
            </p>
            <br />
            <p>Some technologies I&apos;m proficient in:</p>
          </div>

          <ul className="skills-list" style={{"--total-rows": Math.ceil(skills.length / 2)}}>
            {
              skills && skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))
            }
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img src="/images/avatar.jpeg" alt="Avatar" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

/**
 * Formats a number representing years of experience into a more readable string.
 *
 * This function considers the fractional part of the input number to determine the format:
 * - If the decimal part is 0.0 to less than 0.3, it returns `currentInteger+`
 * - If the decimal part is 0.3 to less than 0.7, it returns `currentInteger.5`
 * - If the decimal part is 0.7 to 1.0, it returns `~nextInteger`
 *
 * @param {number} totYearsExp - The total years of experience as a number.
 * @returns {string} A formatted string representing the years of experience.
 *
 * @example
 * formatYearsExp(10.1); // Returns "10+"
 * formatYearsExp(10.3); // Returns "10.5"
 * formatYearsExp(10.6); // Returns "10.5"
 * formatYearsExp(10.8); // Returns "~11"
 */
function formatYearsExp(totYearsExp) {
  const intPart = Math.floor(totYearsExp);
  const decimalPart = totYearsExp - intPart;

  if (decimalPart >= 0.7) {
    return `~${intPart + 1}`;
  } else if (decimalPart >= 0.3) {
    return `${intPart}.5`;
  } else {
    return `${intPart}+`;
  }
}