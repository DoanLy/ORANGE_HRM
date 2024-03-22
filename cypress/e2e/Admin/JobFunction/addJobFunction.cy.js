import loginPage from "../../../models/pages/HRMLoginPage.js";
import AdminPage from "../../../models/pages/AdminPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";

/// <reference types="cypress" />

describe("Add Job Function", () => {
  let jobData;

  beforeEach(() => {
    cy.fixture("addJobDataTest").then((data) => {
      jobData = data;
    });
    loginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
    //Navigate Job page
    AdminPage.visitJobPage();
    AdminPage.visitJobTitlePage();
  });

  it("Verify add job successfully", () => {
    //add job title
    AdminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify that an existing job cannot be added", () => {
    //add job title
    AdminPage.addJobTitle(jobData.DEV.JobTitle, jobData.DEV.Description);
    cy.contains(ResultData.MessageExist()).should("be.visible");
  });
});
