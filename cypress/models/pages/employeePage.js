import iconComponent from "../components/iconComponent.js";
import tableComponent from "../components/tableComponent.js";
import buttonComponent from "../components/buttonComponent.js";
class employeePage {
  handleFormPersonalDetails(FirstName, LastName, EmployeeId) {
    cy.get('input[name="firstName"]').type(FirstName);
    cy.get('input[name="lastName"]').type(LastName);
    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type(EmployeeId);
    cy.get('button[type="submit"]').click();
  }
  searchEmployeeByID(EmployeeId) {
    //search employee need to update info
    cy.get(":nth-child(2) > .oxd-input").type(EmployeeId);
    cy.wait(1000);
    buttonComponent.clickBtnSearch();
    cy.wait(5000);
    tableComponent.getTableRow().should("contain", EmployeeId);
  }

  searchEmployeeByName(FirstName, LastName) {
    const employeeName = FirstName + " " + LastName;
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input"
    ).type(employeeName);
    cy.wait(3000);
    cy.contains(employeeName).click();
    buttonComponent.clickBtnSearch();
    // cy.get('button[type="submit"]').click();
    tableComponent.getTableRow().should("contain", employeeName);
  }
  editEmployee(EmployeeId, FirstName, LastName) {
    tableComponent.handleActionOnTableRow(
      EmployeeId,
      iconComponent.iconEditElem
    );
    cy.get('input[name="firstName"]').clear().type(FirstName);
    cy.get('input[name="lastName"]').clear().type(LastName);
    cy.get(
      ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    ).click();
  }

  deleteEmployee(EmployeeId) {
    tableComponent.handleActionOnTableRow(
      EmployeeId,
      iconComponent.iconDeleteElem
    );
    buttonComponent.comfirmDialogDelete().click();
  }
}

export default new employeePage();
