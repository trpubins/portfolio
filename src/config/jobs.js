/* eslint-disable max-len */
import { parseMonthYear } from '../common/date';

const jobsData = [
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
 * Calculates the years of service for a given job based on start and end dates.
 *
 * This function takes a job object with `startDate` and optional `endDate` properties.
 * The `startDate` and `endDate` are parsed into `Date` objects (using `parseMonthYear`),
 * and the difference in years is calculated. If `endDate` is not provided, the current date is used.
 * The result is rounded to one decimal place.
 *
 * @param {Object} job - The job object containing start and end dates.
 * @param {string} job.startDate - The start date of the job in "Month Year" format (e.g., "Jan 2020").
 * @param {string} [job.endDate] - The end date of the job in "Month Year" format. If not provided, the current date is used.
 * @returns {number} The total years of service rounded to one decimal place.
 *
 * @example
 * const job = { startDate: "Jan 2020", endDate: "Jun 2022" };
 * calculateYearsOfService(job); // Returns 2.5
 *
 * const ongoingjob = { startDate: "Jan 2020" };
 * calculateYearsOfService(ongoingjob); // Returns the number of years from Jan 2020 to the current date.
 */
function calculateYearsOfService(job) {
  const startDate = new Date(parseMonthYear(job.startDate));
  const endDate = job.endDate ? new Date(parseMonthYear(job.endDate)) : new Date();

  const millisDiff = endDate - startDate;
  const yearsDiff = millisDiff / (1000 * 60 * 60 * 24 * 365.25);

  return Number(yearsDiff.toFixed(1));
}

// add years of service to each job
const jobs = jobsData.map((item) => ({
  ...item,
  yearsSvc: calculateYearsOfService(item),
}));

module.exports = {
  jobs: jobs,
  calculateYearsOfService,
};
