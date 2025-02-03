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

/**
 * Calculates the years of service for a given work item based on start and end dates.
 *
 * This function takes a work item object with `startDate` and optional `endDate` properties.
 * The `startDate` and `endDate` are parsed into `Date` objects (using `parseMonthYear`),
 * and the difference in years is calculated. If `endDate` is not provided, the current date is used.
 * The result is rounded to one decimal place.
 *
 * @param {Object} workItem - The work item object containing start and end dates.
 * @param {string} workItem.startDate - The start date of the work item in "Month Year" format (e.g., "Jan 2020").
 * @param {string} [workItem.endDate] - The end date of the work item in "Month Year" format. If not provided, the current date is used.
 * @returns {number} The total years of service rounded to one decimal place.
 *
 * @example
 * const workItem = { startDate: "Jan 2020", endDate: "Jun 2022" };
 * calculateYearsOfService(workItem); // Returns 2.5
 *
 * const ongoingWorkItem = { startDate: "Jan 2020" };
 * calculateYearsOfService(ongoingWorkItem); // Returns the number of years from Jan 2020 to the current date.
 */
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
