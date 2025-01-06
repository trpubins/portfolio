/* eslint-disable max-len */
import { email, skills, socialMedia } from './about';
import featuredProjects from './featured';
import projects from './projects';
import { work } from './work';

module.exports = {
  email: email,
  skills: skills,
  socialMedia: socialMedia,
  featuredProjects,
  projects,
  work,
  navLinks: [
    {
      name: 'About',
      url: '/#about',
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
