import loginPage from "../../models/pages/HRMLoginPage.js";
import AdminPage from "../../models/pages/AdminPage.js";
import ResultData from "../../models/components/ResultData.js";
/// <reference types="cypress" />

describe("Delete Job Function", () => {
  let jobData;
  beforeEach(() => {
    cy.fixture("addJobDataTest").then((data) => {
      jobData = data;
    });
    loginPage.login();
    // Admin page gets opened
    AdminPage.visitAdminPage();
  });

  it("Verify delete job successfully", () => {
    //Navigate Job page
    AdminPage.visitJobPage();
    AdminPage.visitJobTitlePage();
    AdminPage.deleteJobTitle(jobData.DEV.JobTitle);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
