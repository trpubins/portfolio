const { calculateYearsOfService } = require("../src/config/work.js");
const fs = require("fs");
const path = require("path");

const eventsDir = path.join(__dirname, "events", "work");
const testCases = fs.readdirSync(eventsDir).map((file) => {
    const filePath = path.join(eventsDir, file);
    const inputData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return [file, inputData];
});

describe("CalculateYearsOfService", () => {
    test.each(testCases)(
        "%s",
        (fileName, { description, input, expectedOutput }) => {
            console.log(`Test Description: ${description}`);
            const { workData } = input;
            
            // Calculate years of service for each work item
            const result = workData.map(item => ({
                ...item,
                yearsSvc: calculateYearsOfService(item)
            }));

            const totYearsSvc = result.reduce((total, item) => total + item.yearsSvc, 0).toFixed(1);
            
            // Compare with expected output
            expect(result).toEqual(expectedOutput);
        }
    );
});