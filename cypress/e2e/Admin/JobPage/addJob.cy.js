/// <reference types="cypress" />
import LoginPage from "../../../models/pages/Auth/LoginPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";
import jobPage from "../../../models/pages/Admin/JobPage.js";
describe("Test Add Job Function", () => {
  let jobData;

  beforeEach(() => {
    cy.fixture("JobTestData").then((data) => {
      jobData = data;
    });
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
    //Navigate Job page
    jobPage.visitJobPage();
    jobPage.visitJobTitlePage();
  });

  it("Verify delete existing job successfully", () => {
    //Navigate Job page
    jobPage.deleteJobTitle(jobData.QC.JobTitle);
  });

  it("Verify add job successfully", () => {
    //add job title
    jobPage.addJobTitle(jobData.QC.JobTitle, jobData.QC.Description);
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify that an existing job cannot be added", () => {
    //add job title
    jobPage.addJobTitle(jobData.QC.JobTitle, jobData.QC.Description);
    cy.contains(ResultData.MessageExist()).should("be.visible");
  });
});
