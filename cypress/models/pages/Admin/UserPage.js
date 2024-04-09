import buttonComponent from "../../components/buttonComponent.js";
import tableComponent from "../../components/tableComponent.js";
import iconComponent from "../../components/iconComponent.js";
class UserPage {
  getAddBtn() {
    return cy.get(".orangehrm-header-container > .oxd-button");
  }

  addUser(UserRole, Status, EmployeeName, UserName, Password, ConfirmPassword) {
    // Add User page gets opened
    this.getAddBtn().click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "contain",
      "Add User"
    );
    // User role gets selected
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains(".oxd-select-option", UserRole).click();

    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).should("contain", UserRole);
    // Status gets selected
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.contains(".oxd-select-option", Status).click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).should("contain", Status);

    // Employee name field gets filled
    cy.get('input[placeholder="Type for hints..."]').type(EmployeeName);
    cy.wait(3000);
    cy.contains(EmployeeName).click();
    // input username&password
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(UserName);
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(Password);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(ConfirmPassword);
    //A success message gets displayed
    buttonComponent.clickBtnSave();
  }

  searchUser(UserName) {
    cy.get(":nth-child(2) > .oxd-input").type(UserName);
    cy.wait(3000);
    buttonComponent.clickBtnSearch();
    cy.wait(3000);
    tableComponent.getTableRow().should("contain", UserName);
  }

  deleteUser(UserName) {
    //Navigate Job page
    tableComponent.handleActionOnTableRow(
      UserName,
      iconComponent.iconDeleteElem
    );
    cy.get(".oxd-button--label-danger").click();
  }
  editUser(UserName) {
    //Navigate Job page
    tableComponent.handleActionOnTableRow(UserName, iconComponent.iconEditElem);
  }
}
export default new UserPage();
