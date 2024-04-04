/// <reference types="cypress" />
import loginPage from "../../../models/pages/HRMLoginPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";
import adminPage from "../../../models/pages/adminPage.js";
describe("Add Job Function", () => {
  let jobData;

  beforeEach(() => {
    cy.fixture("JobTestData").then((data) => {
      jobData = data;
    });
    loginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
    //Navigate Job page
    adminPage.visitJobPage();
    adminPage.visitJobTitlePage();
  });

  it.only("Verify add job successfully", () => {
    //add job title
    adminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify that an existing job cannot be added", () => {
    //add job title
    adminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.contains(ResultData.MessageExist()).should("be.visible");
  });
});
