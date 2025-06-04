const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.API_SOCCER_KEY = process.env.API_SOCCER_KEY;
      config.env.NBA_API_KEY = process.env.NBA_API_KEY;
      return config;
    },
  },
});
