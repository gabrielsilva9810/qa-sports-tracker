const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.API_SOCCER_KEY = process.env.API_SOCCER_KEY;
      return config;
    },
  },
});
