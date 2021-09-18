const path = require('path');

const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  retries: 3,
  outputDir: path.join(__dirname, '../e2e-results'),
  testMatch: /.*.e2e.js$/,
};

module.exports = config;
