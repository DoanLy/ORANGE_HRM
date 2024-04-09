const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1i21yi",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    overwrite: false,
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
});
