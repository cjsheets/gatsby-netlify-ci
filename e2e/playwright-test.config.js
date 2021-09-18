const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  contextOptions: {
    recordVideo: {
      dir: 'videos/',
    },
  },
  testMatch: /.*.e2e.js$/,
};

module.exports = config;
