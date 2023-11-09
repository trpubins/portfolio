/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';

module.exports = {
  email: 'my-email@mail.com',
  featuredProjects,
  projects,
  skills: ['Python', 'JavaScript', 'React'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/my-user',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/my-user/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/my-user',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/my-user',
    },
  ],
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
