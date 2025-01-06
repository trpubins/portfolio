/* eslint-disable max-len */
import { parseMonthYear } from '../common/date';

const workData = [
  {
    roles: ['Software Engineering Manager', 'Senior Software Architect'],
    companyName: 'Pratt & Whitney',
    companyUrl: 'https://www.prattwhitney.com',
    startDate: 'Feb 2022',
    endDate: null,
  },
  {
    roles: [
      'Software Engineer',
      'Senior Product Support Engineer',
      'Lead Project Engineer',
      'Associate Project Engineer',
    ],
    companyName: 'Collins Aerospace',
    companyUrl: 'https://www.collinsaerospace.com',
    startDate: 'Jan 2017',
    endDate: 'Feb 2022',
  },
  {
    roles: ['Manufacturing Engineering Intern'],
    companyName: 'Honeywell',
    companyUrl: 'https://www.honeywell.com',
    startDate: 'May 2016',
    endDate: 'Aug 2016',
  },
];

function calculateYearsOfService(workItem) {
  const startDate = new Date(parseMonthYear(workItem.startDate));
  const endDate = workItem.endDate ? new Date(parseMonthYear(workItem.endDate)) : new Date();

  const millisDiff = endDate - startDate;
  const yearsDiff = millisDiff / (1000 * 60 * 60 * 24 * 365.25);

  return Number(yearsDiff.toFixed(1));
}

// add years of service to each work item
const work = workData.map((item) => ({
  ...item,
  yearsSvc: calculateYearsOfService(item),
}));

module.exports = {
  work,
  calculateYearsOfService,
};
