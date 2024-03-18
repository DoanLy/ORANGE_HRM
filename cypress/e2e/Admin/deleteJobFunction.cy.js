/// <reference types="cypress" />

describe("Delete Job Function", () => {
  const jobData = {
    JobTitle: "Account Assistant",
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
    cy.get(".oxd-table-body")
      .find(".oxd-table-card")
      .each((item, index) => {
        const t = item.text();
        if (t.includes(jobData.JobTitle)) {
          cy.get(".oxd-icon.bi-trash").eq(index).click();
        }
      });
    cy.get(".oxd-button--label-danger").click();
    cy.contains("Successfully Deleted").should("be.visible");
  });
});
