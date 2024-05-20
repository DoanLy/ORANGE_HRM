const { defineConfig } = require("cypress");
const moment = require("moment");

function getCurrentDateTime() {
  const currentDateTime = moment().format("DD-MM-YYYY_HHmmss");
  return currentDateTime;
}
module.exports = defineConfig({
  projectId: "1i21yi",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    overwrite: false,
    charts: true, //biểu đồ
    reportPageTitle: "Automation Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: `report-${getCurrentDateTime()}.html`,
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 200000,
    requestTimeout: 10000,
    responseTimeout: 50000,
  },
});
