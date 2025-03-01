/* eslint-disable max-len */
import { email, skills, socialMedia } from './about';
import certifications from './certs';
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
  certifications,
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
      name: 'Certifications',
      url: '/#certs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
};
