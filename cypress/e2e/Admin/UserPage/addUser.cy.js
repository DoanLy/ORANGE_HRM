/// <reference types="cypress" />

import UserPage from "../../../models/pages/Admin/UserPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { UserTestData } from "../../../fixtures/UserTestData.js";
import HomePage from "../../../models/pages/HomePage.js";
describe("Test Add User Function", () => {
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });

  it(`Verify add user successfully `, () => {
    // Add User page gets opened
    UserPage.addUser(
      UserTestData.UserRole,
      UserTestData.Status,
      UserTestData.EmployeeName,
      UserTestData.UserName,
      UserTestData.Password,
      UserTestData.ConfirmPassword
    );
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify that an existing user cannot be added", () => {
    // Add User page gets opened
    UserPage.addUser(
      UserTestData.UserRole,
      UserTestData.Status,
      UserTestData.EmployeeName,
      UserTestData.UserName,
      UserTestData.Password,
      UserTestData.ConfirmPassword
    );
    //A success message gets displayed
    cy.contains(ResultData.MessageExist()).should("be.visible");
  });
});
