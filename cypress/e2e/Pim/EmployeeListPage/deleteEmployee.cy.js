/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage.js";
import EmployeeListPage from "../../../models/pages/Pim/EmployeeListPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { employeeTestData } from "../../../fixtures/EmployeeTestData.js";
describe("Test Delete Employee Function", () => {
  beforeEach(() => {
    // Pim page gets opened
    HomePage.clickMainMenuItem("PIM", "pim");
  });

  it("Verify delete employee successfully", () => {
    EmployeeListPage.searchEmployeeByID(employeeTestData.EmployeeId);

    EmployeeListPage.deleteEmployee(employeeTestData.EmployeeId);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
