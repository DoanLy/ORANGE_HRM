/// <reference types="cypress" />
import HRMLoginPage from "../../../models/pages/HRMLoginPage.js";
import UserPage from "../../../models/pages/UserPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { UserTestData } from "../../../fixtures/UserTestData.js";
import HomePage from "../../../models/pages/HomePage.js";

describe("User Function", () => {
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
  });

  it("Verify add user successfully", () => {
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

  it("Verify search user", () => {
    UserPage.searchUser(UserTestData.UserName);
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
  it("Verify edit user successfully", () => {
    UserPage.editUser(UserTestData.UserName);
    cy.get("h6").should("contain", "Edit User");
  });

  it("Verify delete user successfully", () => {
    UserPage.deleteUser(UserTestData.UserName);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
