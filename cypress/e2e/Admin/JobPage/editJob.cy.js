/// <reference types="cypress" />
import jobPage from "../../../models/pages/Admin/JobPage.js";
import HomePage from "../../../models/pages/HomePage.js";

describe("Test Edit Job Function", () => {
  let jobData;
  beforeEach(() => {
    cy.fixture("JobTestData").then((data) => {
      jobData = data;
    });
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });
  it("Verify edit job successfully", () => {
    //Navigate Job page
    jobPage.visitJobPage();
    jobPage.visitJobTitlePage();
    jobPage.editJobTitle(jobData.AccountAssistant.JobTitle);
    cy.get("h6").should("contain", "Edit Job Title");
  });
});
