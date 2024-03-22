/// <reference types="cypress" />
import HRMLoginPage from "../../../models/pages/HRMLoginPage.js";
import UserPage from "../../../models/pages/UserPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { UserDataTest } from "../../../fixtures/UserDataTest.js";

describe("User Function", () => {
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Admin", "admin");
  });

  it("Verify add user successfully", () => {
    // Add User page gets opened
    UserPage.addUser(
      UserDataTest.UserRole,
      UserDataTest.Status,
      UserDataTest.EmployeeName,
      UserDataTest.UserName,
      UserDataTest.Password,
      UserDataTest.ConfirmPassword
    );
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it.skip("Verify search user", () => {
    UserPage.searchUser(UserDataTest.UserName);
  });

  it("Verify that an existing user cannot be added", () => {
    // Add User page gets opened
    UserPage.addUser(
      UserDataTest.UserRole,
      UserDataTest.Status,
      UserDataTest.EmployeeName,
      UserDataTest.UserName,
      UserDataTest.Password,
      UserDataTest.ConfirmPassword
    );
    //A success message gets displayed
    cy.contains(ResultData.MessageExist()).should("be.visible");
  });
  it.skip("Verify edit user successfully", () => {
    UserPage.editUser(UserDataTest.UserName);
    cy.get("h6").should("contain", "Edit User");
  });

  it.skip("Verify delete user successfully", () => {
    UserPage.deleteUser(UserDataTest.UserName);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
