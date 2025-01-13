/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import { skills, work } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const totYearsExp = work.reduce((total, item) => total + item.yearsSvc, 0).toFixed(1);

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

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
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
 * - If the decimal part is greater than 0.5 and less than 1, it rounds up and returns `~nextInteger`.
 * - If the decimal part is between 0 and 0.5 (inclusive), it normalizes to `currentInteger+`.
 * - For any other case, it falls back to the original number formatted to one decimal place.
 *
 * @param {number} totYearsExp - The total years of experience as a number.
 * @returns {string} A formatted string representing the years of experience.
 *
 * @example
 * formatYearsExp(10.3); // Returns "10+"
 * formatYearsExp(10.6); // Returns "~11"
 * formatYearsExp(10.0); // Returns "10+"
 * formatYearsExp(11.8); // Returns "~12"
 */
function formatYearsExp(totYearsExp) {
  const intPart = Math.floor(totYearsExp); // Extract the integer part
  const decimalPart = totYearsExp - intPart; // Get the fractional part

  if (decimalPart > 0.5 && decimalPart < 1) {
    return `~${intPart + 1}`;
  } else if (decimalPart >= 0 && decimalPart <= 0.5) {
    return `${intPart}+`;
  } else {
    return totYearsExp.toFixed(1); // Fallback to the original value
  }
}