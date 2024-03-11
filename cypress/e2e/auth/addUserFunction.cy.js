/// <reference types="cypress" />

describe("Add User Function", () => {
  before(() => {
    cy.login();
  });
  it("Verify adding a user to the system", () => {
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Admin").click();
    cy.url().should("include", "admin");
    // Add User page gets opened
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "contain",
      "Add User"
    );
    // User role gets selected
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains(".oxd-select-option", "Admin").click();
    //  confirm the selected value
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).should("contain", "Admin");
    // Status gets selected
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains(".oxd-select-option", "Enabled").click();

    // Employee name field gets filled
  });
});
