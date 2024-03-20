import loginPage from "../../models/pages/HRMLoginPage.js";
import AdminPage from "../../models/pages/AdminPage.js";
import ResultData from "../../models/components/ResultData.js";

/// <reference types="cypress" />

describe("Add Job Function", () => {
  let jobData;

  beforeEach(() => {
    cy.fixture("addJobDataTest").then((data) => {
      jobData = data;
    });
    loginPage.login();
    // Admin page gets opened
    AdminPage.visitAdminPage();
  });

  it("Verify add job successfully", () => {
    //Navigate Job page
    AdminPage.visitJobPage();
    AdminPage.visitJobTitlePage();
    //add job title
    AdminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify job addition existence", () => {
    //Navigate Job page
    AdminPage.visitJobPage();
    AdminPage.visitJobTitlePage();
    //add job title
    AdminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.get(".oxd-input-group > .oxd-text")
      .contains(ResultData.MessageExist())
      .should("be.visible");
  });
});
