/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage.js";
import topbarComponent from "../../../models/components/topbarComponent.js";
import EmployeeListPage from "../../../models/pages/Pim/EmployeeListPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { employeeTestData } from "../../../fixtures/EmployeeTestData.js";
describe("Test Add Employee Function", () => {
  beforeEach(() => {
    // Pim page gets opened
    HomePage.clickMainMenuItem("PIM", "pim");
  });

  it("Verify add employee successfully", () => {
    topbarComponent.clickItemFromTopBar("Add Employee");
    EmployeeListPage.handleFormPersonalDetails(
      employeeTestData.FirstName,
      employeeTestData.LastName,
      employeeTestData.EmployeeId
    );
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });
});
