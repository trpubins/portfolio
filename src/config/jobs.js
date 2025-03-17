/* eslint-disable max-len */
import { parseMonthYear } from '../common/date';

const jobsData = [
  {
    companyName: 'Pratt & Whitney',
    companyNameShort: 'P&W',
    companyUrl: 'https://www.prattwhitney.com',
    roles: ['Software Engineering Manager', 'Senior Software Architect'],
    accomplishments: [
      'Architect, develop and maintain cloud-native apps on AWS to automate engineering evaluations for jet engine hardware',
      'Build and deploy scalable, high-performance RESTful APIs for common microservices used across multiple internal teams',
      'Champion a test-driven culture by advocating best practices, implementing CI/CD pipelines with GH Actions, and mentoring teams to improve code quality and accelerate deployments',
      'Develop comprehensive user docs and training curriculum',
      'Collaborate with cross-functional teams to develop processes for Methods CoP, fostering knowledge sharing & best practices',
      'Migrated production app seamlessly to Enterprise cloud with zero downtime, data loss, or user impact',
      'Invented novel solution to remove damage within a finite element model of a component; co-inventor of Patent Pending (U.S. Patent Application No. 18/632,725, filed Apr 2024)'
    ],
    startDate: 'Feb 2022',
    endDate: null,
  },
  {
    companyName: 'Collins Aerospace',
    companyNameShort: 'Collins',
    companyUrl: 'https://www.collinsaerospace.com',
    roles: [
      'Software Engineer',
      'Senior Product Support Engineer',
      'Lead Project Engineer',
      'Associate Project Engineer',
    ],
    accomplishments: [
      'Designed and built engineering tools and hardware emulators using the desktop app framework, Electron',
      'Developed and maintained ARINC 661 (spec.) SDKs to support customers building end-user applications for cockpit displays',
      'Led agile ceremonies as Scrum Master, increasing team predictability and ensuring consistent value delivery',
      'Verified software requirements to support DO-178 certification',
      'Deployed applications by packaging installers, encrypting source code and configuring license managers',
      'Earned a Level 1 Excellence Award for driving results on product rejections at Airbus flight assembly line'
    ],
    startDate: 'Jan 2017',
    endDate: 'Feb 2022',
  },
  {
    companyName: 'Honeywell',
    companyUrl: 'https://www.honeywell.com',
    roles: ['Manufacturing Engineering Intern'],
    accomplishments: [
      'Generated cost analyses of turbine engine parts totaling $1.2M in potential savings',
      'Interpreted complex drawings according to ASME Y14.5 standards (GD&T)',
      'Supported value engineering efforts through supplier negotiations'
    ],
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
  title: item.roles[0],
  yearsSvc: calculateYearsOfService(item),
}));

module.exports = {
  jobs: jobs,
  calculateYearsOfService,
};
