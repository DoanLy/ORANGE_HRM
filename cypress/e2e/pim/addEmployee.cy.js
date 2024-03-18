/// <reference types="cypress" />

describe("Add User Function", () => {
  const randomEmpID = () => {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return randomNumber;
  };
  const idEmployee = randomEmpID();
  const employeeTestData = {
    FirstName: "QC",
    LastName: "Engineer",
    EmployeeId: `${idEmployee}`,
  };

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

  it("Verify adding a user to the system", () => {
    cy.get(".oxd-topbar-body-nav")
      .find("li a")
      .contains("Add Employee")
      .click();
    cy.get('input[name="firstName"]').type(employeeTestData.FirstName);
    cy.get('input[name="lastName"]').type(employeeTestData.LastName);
    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type(employeeTestData.EmployeeId);
    cy.get('button[type="submit"]').click();
    cy.contains("Successfully Saved").should("be.visible");
  });

  it("Verify Edit an employee", () => {
    //search employee need to update info
    cy.get(":nth-child(2) > .oxd-input").type(employeeTestData.EmployeeId);
    cy.wait(1000);
    cy.get('button[type="submit"]').click();
    cy.wait(5000);
    cy.get(".oxd-table-body")
      .find(".oxd-table-card")
      .each((item, index) => {
        const t = item.text();
        if (t.includes(employeeTestData.EmployeeId)) {
          //update
          cy.get(".oxd-icon.bi-pencil-fill").eq(index).click();
        }
      });

    //Update info
    cy.get('input[name="firstName"]').clear().type(employeeUpdate.FirstName);
    cy.get('input[name="lastName"]').clear().type(employeeUpdate.LastName);
    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click();
    cy.contains("Successfully Updated").should("be.visible");
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
      .each((item) => {
        const t = item.text();
        cy.wrap(t).should(
          "include",
          employeeUpdate.FirstName + " " + employeeUpdate.LastName
        );
      });
  });
});
