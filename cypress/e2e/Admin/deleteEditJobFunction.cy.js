/// <reference types="cypress" />
import loginPage from "../../models/pages/HRMLoginPage.js";
import AdminPage from "../../models/pages/AdminPage.js";
import ResultData from "../../models/components/ResultData.js";

describe("Delete Job Function", () => {
  let jobData;
  beforeEach(() => {
    cy.fixture("JobDataTest").then((data) => {
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
    AdminPage.deleteJobTitle(jobData.QALead.JobTitle);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });

  it.skip("Verify Edit job successfully", () => {
    //Navigate Job page
    AdminPage.visitJobPage();
    AdminPage.visitJobTitlePage();
    AdminPage.editJobTitle(jobData.QALead.JobTitle);
    cy.get("h6").should("contain", "Edit Job Title");
  });
});
