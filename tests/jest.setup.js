// jest.setup.js
if (process.env.SILENCE_LOGS) {
    global.console = {
        ...console,
        log: jest.fn(),
    };
}
