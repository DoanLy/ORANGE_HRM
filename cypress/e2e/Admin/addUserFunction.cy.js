/// <reference types="cypress" />

describe("Add User Function", () => {
  const randomUserName = () => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return `Test${randomNumber}`;
  };

  const userTestData = {
    UserName: randomUserName(),
    UserRole: "Admin",
    Status: "Enable",
    EmployeeName: "Odis Adalwin",
  };

  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Admin").click();
    cy.url().should("include", "admin");
  });

  it("Verify adding a user to the system", () => {
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
    cy.contains(".oxd-select-option", userTestData.UserRole).click();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).should("contain", userTestData.UserRole);
    // Status gets selected
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains(".oxd-select-option", userTestData.Status).click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).should("contain", userTestData.Status);

    // Employee name field gets filled
    cy.get('input[placeholder="Type for hints..."]').type(
      userTestData.EmployeeName
    );
    cy.wait(3000);
    cy.contains(userTestData.EmployeeName).click();
    // input username&password
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userTestData.UserName);
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Test123@QA$");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Test123@QA$");
    //A success message gets displayed
    cy.get(".oxd-button--secondary").click();

    cy.contains("Successfully Saved").should("be.visible");
  });

  it("Verify that the recently added user has been successfully added to the system", () => {
    cy.get(":nth-child(2) > .oxd-input").type(userTestData.UserName);
    cy.wait(3000);

    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.wait(3000);
    cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").should(
      "have.text",
      userTestData.UserName
    );
  });

  it("Verify adding a user to the system with existing username", () => {
    // Add User page gets opened
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "contain",
      "Add User"
    );
    // input username&password
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userTestData.UserName);
    //A success message gets displayed

    cy.contains("Already exists").should("be.visible");
  });
});
