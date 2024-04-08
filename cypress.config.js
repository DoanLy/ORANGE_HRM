const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  e2e: {
    projectId: "z1782k",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
});
