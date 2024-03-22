import LeftMenuComponent from "../../models/components/LeftMenuComponent.js";
import iconComponent from "../components/iconComponent.js";
import buttonComponent from "../components/buttonComponent.js";
import tableComponent from "../components/tableComponent.js";
const TOPBAR_MENU_ITEM_SEL = ".oxd-topbar-body-nav ul";
const DROPDOWN_MENU_ITEM_SEL = ".oxd-dropdown-menu li";

class AdminPage {
  visitAdminPage() {
    LeftMenuComponent.MenuItemElem().contains("Admin").click();
    cy.url().should("include", "admin");
  }
  TopbarMenuItemElem() {
    return cy.get(TOPBAR_MENU_ITEM_SEL);
  }

  DropdownMenuItemElem() {
    return cy.get(DROPDOWN_MENU_ITEM_SEL);
  }

  visitJobPage() {
    this.TopbarMenuItemElem().contains("Job").click();
  }

  visitJobTitlePage() {
    this.DropdownMenuItemElem().contains("Job Titles").click();
  }
  addJobTitle(JobTitle, Description) {
    //Navigate add job page
    cy.get(".oxd-button").click();
    cy.get(".orangehrm-card-container > .oxd-text--h6").should(
      "have.text",
      "Add Job Title"
    );

    //   Fill information job
    cy.get(":nth-child(2) > .oxd-input").type(JobTitle);
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea"
    ).type(Description);
    //upload file
    const fileName = "testcase_thamkhao.txt";
    // cy.get(".oxd-file-input-div").click();
    cy.get('input[type="file"]').attachFile({
      filePath: fileName,
      encoding: "utf-8",
    });

    cy.wait(5000);
    buttonComponent.clickBtnSave();
  }

  rowJobTitleElem() {
    return cy.get(".oxd-table-body").find(".oxd-table-card");
  }

  deleteJobTitle(JobTitle) {
    //Navigate Job page
    tableComponent.handleActionOnTableRow(
      JobTitle,
      iconComponent.iconDeleteElem
    );
    cy.get(".oxd-button--label-danger").click();
  }
  editJobTitle(JobTitle) {
    tableComponent.handleActionOnTableRow(JobTitle, iconComponent.iconEditElem);
  }
}

export default new AdminPage();
