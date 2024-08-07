const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pricelabs.co',
    env: {
      email: 'qa.pricelabs@gmail.com',
      password: 'qg33N$yxJP'
    },
    setupNodeEvents(on, config) {
    }
  }
});
