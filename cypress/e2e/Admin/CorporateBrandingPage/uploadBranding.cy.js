/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage.js";
import topbarComponent from "../../../models/components/topbarComponent.js";
import CorporateBrandingPage from "../../../models/pages/Admin/CorporateBrandingPage.js";
const urlfile = "../ORANGE-HRM/cypress/fixtures/treesthumbnail.png";
const filename = "treesthumbnail.png";
describe("Test Upload Branding Logo and Banner Function", () => {
  beforeEach(() => {
    cy.viewport(1500, 1000);
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });
  it("Verify upload file successfully", () => {
    //Navigate Corporate Branding page
    topbarComponent.clickItemFromTopBar("Corporate Branding");
    CorporateBrandingPage.uploadLogo(
      CorporateBrandingPage.getLogoInputFile,
      urlfile
    );
    CorporateBrandingPage.getLogoInputFile().should("contain", filename);
  });
});
