/// <reference types="cypress" />
import loginPage from "../../../models/pages/HRMLoginPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";
import adminPage from "../../../models/pages/adminPage.js";
import topbarComponent from "../../../models/components/topbarComponent.js";
describe("Upload Branding Logo and Banner Function", () => {
  beforeEach(() => {
    cy.viewport(1500, 1000);
    loginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
  });

  it("verify ...", () => {
    //Navigate Corporate Branding page

    topbarComponent.visitTopBarItem("Corporate Branding");
    cy.get(":nth-child(1) > .orangehrm-file-input > .oxd-input-group").within(
      () => {
        cy.get('input[type="file"]').selectFile(
          "D:/CODE/ORANGE-HRM/cypress/fixtures/treesthumbnail.png",
          { force: true }
        );
      }
    );
  });
});
