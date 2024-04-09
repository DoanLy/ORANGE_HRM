/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage.js";
import topbarComponent from "../../../models/components/topbarComponent.js";
import EmployeeListPage from "../../../models/pages/Pim/EmployeeListPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { employeeTestData } from "../../../fixtures/EmployeeTestData.js";
describe("Test Edit Employee Function", () => {
  const employeeUpdate = {
    FirstName: "Python",
    LastName: "Developer",
  };

  beforeEach(() => {
    // Pim page gets opened
    HomePage.clickMainMenuItem("PIM", "pim");
  });

  it("Verify Edit an employee", () => {
    //search employee need to update info
    EmployeeListPage.searchEmployeeByID(employeeTestData.EmployeeId);
    EmployeeListPage.editEmployee(
      employeeTestData.EmployeeId,
      employeeUpdate.FirstName,
      employeeUpdate.LastName
    );
    cy.contains(ResultData.UpdateSuccess()).should("be.visible");
  });

  it("Verify successful update of employee information", () => {
    topbarComponent.clickItemFromTopBar("Employee List");
    EmployeeListPage.searchEmployeeByName(
      employeeUpdate.FirstName,
      employeeUpdate.LastName
    );
  });
});
