/// <reference types="cypress" />
import HRMLoginPage from "../../models/pages/HRMLoginPage.js";
import HomePage from "../../models/pages/HomePage.js";
import topbarComponent from "../../models/components/topbarComponent.js";
import employeePage from "../../models/pages/employeePage.js";
import ResultData from "../../models/components/ResultData.js";
import { employeeTestData } from "../../fixtures/EmployeeTestData.js";
describe("Add Employee Function", () => {
  const employeeUpdate = {
    FirstName: "Python",
    LastName: "Developer",
  };

  beforeEach(() => {
    HRMLoginPage.login();
    // Pim page gets opened
    HomePage.clickMenuItem("PIM", "pim");
  });

  it("Verify add employee successfully", () => {
    topbarComponent.clickItemFromTopBar("Add Employee");
    employeePage.handleFormPersonalDetails(
      employeeTestData.FirstName,
      employeeTestData.LastName,
      employeeTestData.EmployeeId
    );

    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify Edit an employee", () => {
    //search employee need to update info
    employeePage.searchEmployeeByID(employeeTestData.EmployeeId);
    employeePage.editEmployee(
      employeeTestData.EmployeeId,
      employeeUpdate.FirstName,
      employeeUpdate.LastName
    );
    cy.contains(ResultData.UpdateSuccess()).should("be.visible");
  });

  it("Verify successful update of employee information", () => {
    topbarComponent.clickItemFromTopBar("Employee List");
    employeePage.searchEmployeeByName(
      employeeUpdate.FirstName,
      employeeUpdate.LastName
    );
  });

  it("Verify delete employee successfully", () => {
    employeePage.searchEmployeeByID(employeeTestData.EmployeeId);
    cy.wait(3000);
    employeePage.deleteEmployee(employeeTestData.EmployeeId);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
