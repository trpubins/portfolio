import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NumberedHeading } from '@common/styles';
import { jobs } from '@config';
import { srConfig } from '@config/sr';
import useMediaQuery from '@hooks/useMediaQuery';
import { KEY_CODES } from '@lib/constants';
import theme from '@themes/common';
import {
  StyledJobsSection,
  StyledTabList,
  StyledTabButton,
  StyledHighlight,
  StyledTabPanels,
  StyledTabPanel,
} from './styles';

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.sm);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  useEffect(() => {
    const jobCount = jobs.length;
    document.documentElement.style.setProperty('--job-count', jobCount);
  }, []);

  const focusTab = React.useCallback(() => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus]);

  // Only re-run the effect if focusTab changes
  useEffect(() => focusTab(), [focusTab]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <NumberedHeading>Where I&apos;ve Worked</NumberedHeading>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={(e) => onKeyDown(e)}>
          {jobs &&
            jobs.map((job, i) => (
              <StyledTabButton
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                ref={(el) => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                <span>{isMobile ? job.companyNameShort || job.companyName : job.companyName}</span>
              </StyledTabButton>
            ))}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {jobs &&
            jobs.map((job, i) => (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                <StyledTabPanel
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{job.title}</span>
                    <span className="company">
                      <a href={job.companyUrl} target="_blank" className="inline-link">
                        {job.companyName}
                      </a>
                    </span>
                  </h3>

                  <p className="range">
                    {job.startDate} — {job.endDate || 'Present'}
                  </p>

                  <ul>
                    {job.accomplishments.map((accomplishment, index) => (
                      <li key={index}>{accomplishment}</li>
                    ))}
                  </ul>
                </StyledTabPanel>
              </CSSTransition>
            ))}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
