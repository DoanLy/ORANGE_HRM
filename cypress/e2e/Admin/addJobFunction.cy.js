/// <reference types="cypress" />

describe("Add Job Function", () => {
  const jobData = {
    JobTitle: "QC",
    Description: "Nothing",
  };
  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Admin").click();
    cy.url().should("include", "admin");
  });

  it("Verify add job successfully", () => {
    //Navigate Job page
    cy.get(".oxd-topbar-body-nav ul").contains("Job").click();
    cy.get(".oxd-dropdown-menu li").contains("Job Titles").click();
    //Navigate add job page
    cy.get(".oxd-button").click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "have.text",
      "Add Job Title"
    );

    //   Fill information job
    cy.get(":nth-child(2) > .oxd-input").type(jobData.JobTitle);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type(jobData.Description);
    //upload file
    const fileName = "testcase_thamkhao.txt";
    // cy.get(".oxd-file-input-div").click();
    cy.get('input[type="file"]').attachFile({
      filePath: fileName,
      encoding: "utf-8",
    });

    cy.wait(5000);
    cy.get(".oxd-button--secondary").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
});
