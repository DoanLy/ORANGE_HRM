/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage.js";
import EmployeeClaimsPage from "../../../models/pages/Claim/EmployeeClaimsPage.js";
import topbarComponent from "../../../models/components/topbarComponent.js";
describe("Test Search Claim Function", () => {
  beforeEach(() => {
    // Claim page gets opened
    HomePage.clickMainMenuItem("Claim", "claim");
    topbarComponent.clickItemFromTopBar("Employee Claims");
  });

  it("Verify date picker", () => {
    EmployeeClaimsPage.searchEmployeeClaims();
  });

  it("Verify date picker", () => {
    EmployeeClaimsPage.searchEmployeeClaims();
  });
});
