/// <reference types="cypress" />

describe("Delete User Function", () => {
  const employeeUpdate = {
    FirstName: "Python",
    LastName: "Developer",
  };

  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("PIM").click();
    cy.url().should("include", "pim");
  });
  it("Search employee updated or no", () => {
    cy.get(".oxd-topbar-body-nav")
      .find("li a")
      .contains("Employee List")
      .click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type(employeeUpdate.FirstName + " " + employeeUpdate.LastName);
    cy.wait(3000);
    cy.contains(
      employeeUpdate.FirstName + " " + employeeUpdate.LastName
    ).click();
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-table-body")
      .find(".oxd-table-card")
      .each((item, index) => {
        const t = item.text();
        if (
          t.includes(employeeUpdate.FirstName + " " + employeeUpdate.LastName)
        ) {
          cy.get(".oxd-icon.bi-trash").eq(index).click();
        }
      });
    cy.get(
      ".oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin"
    ).click();
    cy.contains("Successfully Deleted").should("be.visible");
  });
});
