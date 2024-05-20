import iconComponent from "../../components/iconComponent.js";
import buttonComponent from "../../components/buttonComponent.js";
import tableComponent from "../../components/tableComponent.js";
import topbarComponent from "../../components/topbarComponent.js";
// import fileName from "../../../fixtures/testcase_thamkhao.txt";

const DROPDOWN_MENU_ITEM_SEL = ".oxd-dropdown-menu li";

class jobPage {
  getDropdownMenuItem() {
    return cy.get(DROPDOWN_MENU_ITEM_SEL);
  }

  visitJobPage() {
    topbarComponent.clickItemFromTopBar("Job");
  }

  visitJobTitlePage() {
    this.getDropdownMenuItem().contains("Job Titles").click();
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
    const fileName = "../../../fixtures/testcase_thamkhao.txt";
    // cy.get(".oxd-file-input-div").click();
    cy.get(":nth-child(3) > .oxd-input-group").within(() => {
      cy.get('input[type="file"]').selectFile(fileName, { force: true });
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

export default new jobPage();
