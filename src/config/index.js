/* eslint-disable max-len */
import { email, skills, socialMedia } from './about';
import featuredProjects from './featured';
import { jobs } from './jobs';
import projects from './projects';

module.exports = {
  email: email,
  skills: skills,
  socialMedia: socialMedia,
  featuredProjects,
  projects,
  jobs,
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
};
