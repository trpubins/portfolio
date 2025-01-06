// jest.config.js
module.exports = {
    setupFiles: ["./jest.setup.js"],
    collectCoverage: false,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
    ],
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
};
