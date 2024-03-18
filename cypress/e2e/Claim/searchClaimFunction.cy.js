/// <reference types="cypress" />

describe("Search Claim Function", () => {
  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Claim").click();
    cy.url().should("include", "claim");
  });

  it("Verify date picker", () => {
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();

    cy.get(".oxd-calendar-wrapper").then(() => {
      cy.get(".oxd-calendar-selector-month-selected").click();
      cy.get(".oxd-calendar-dropdown").contains("May").click();
      cy.get(".oxd-calendar-selector-year-selected").click();
      cy.get(".oxd-calendar-dropdown").contains("1990").click();
      cy.get(".oxd-calendar-dates-grid").contains("31").click();
    });

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    ).click();

    cy.get(".oxd-calendar-wrapper").then(() => {
      cy.get(".oxd-calendar-selector-month-selected").click({ multiple: true });
      cy.get(".oxd-calendar-dropdown")
        .contains("May")
        .click({ multiple: true });
      cy.get(".oxd-calendar-selector-year-selected").click({ multiple: true });
      cy.get(".oxd-calendar-dropdown")
        .contains("2024")
        .click({ multiple: true });
      cy.get(".oxd-calendar-dates-grid")
        .contains("3")
        .click({ multiple: true });
    });

    cy.wait(3000);
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.get(".oxd-table-card").should("have.length.at.least", 2);
  });
});
