/* eslint-disable no-return-assign */
/* eslint-disable global-require */
import { useEffect, useRef, useState } from 'react';
import VideoModal from '@components/Common/VideoModal';
import { Icon } from '@components/Icons';
import { NumberedHeading } from '@common/styles';
import { featuredProjects } from '@config';
import { srConfig } from '@config/sr';
import {
  StyledProject,
  StyledProjectLinks,
  StyledProjectImgWrapper,
  StyledProjectImage,
} from './styles';

const Featured = () => {
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const [activeProject, setActiveProject] = useState(null);

  const handleModalOpen = (project) => {
    setActiveProject(project);
  };

  const handleModalClose = () => {
    setActiveProject(null);
  };

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <NumberedHeading ref={revealTitle}>Some of My Projects</NumberedHeading>

      <div>
        {featuredProjects &&
          featuredProjects.map((project, i) => {
            const { title, cover, demo, github, external, descriptionHtml, techs } = project;
            return (
              <StyledProject key={title} ref={(el) => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                  {techs.length && (
                    <ul className="project-tech-list">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <StyledProjectLinks>
                    {github && (
                      <a rel="noreferrer" target="_blank" href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={external}
                        aria-label="External Link"
                      >
                        <Icon name="External" />
                      </a>
                    )}
                    {demo && (
                      <button onClick={() => handleModalOpen(project)} className="hover" aria-label="Watch Demo">
                        <Icon name="PlayDemo" />
                      </button>
                    )}
                  </StyledProjectLinks>
                </div>

                <StyledProjectImgWrapper>
                  <button onClick={() => handleModalOpen(project)} className="hover" aria-label="Watch Demo">
                    <div className="img-wrapper">
                      <div className="img-cont" />
                      <StyledProjectImage src={cover} alt={title} className="img" />
                    </div>
                  </button>
                </StyledProjectImgWrapper>
              </StyledProject>
            );
          })}
      </div>

      {activeProject && (
        <VideoModal
          isOpen={!!activeProject}
          onClose={handleModalClose}
          srcMp4={activeProject.demo}
        />
      )}
    </section>
  );
};

export default Featured;
