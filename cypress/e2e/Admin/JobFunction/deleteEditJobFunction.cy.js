/// <reference types="cypress" />
import HRMLoginPage from "../../../models/pages/HRMLoginPage.js";
import adminPage from "../../../models/pages/adminPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";

describe("Delete Job Function", () => {
  let jobData;
  beforeEach(() => {
    cy.fixture("JobTestData").then((data) => {
      jobData = data;
    });
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
  });

  it("Verify Edit job successfully", () => {
    //Navigate Job page
    adminPage.visitJobPage();
    adminPage.visitJobTitlePage();
    adminPage.editJobTitle(jobData.QALead.JobTitle);
    cy.get("h6").should("contain", "Edit Job Title");
  });

  it("Verify delete job successfully", () => {
    //Navigate Job page
    adminPage.visitJobPage();
    adminPage.visitJobTitlePage();
    adminPage.deleteJobTitle(jobData.QALead.JobTitle);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
