/// <reference types="cypress" />
import HRMLoginPage from "../../models/pages/HRMLoginPage.js";
import AdminPage from "../../models/pages/AdminPage.js";
import UserPage from "../../models/pages/UserPage.js";
import { randomNumber } from "../../MathUtils/randomData.js";
import ResultData from "../../models/components/ResultData.js";
const userTestData = {
  UserName: `Test${randomNumber}`,
  UserRole: "Admin",
  Status: "Enable",
  EmployeeName: "Virat Kohli",
  Password: "Test123@QA$",
  ConfirmPassword: "Test123@QA$",
};
describe("Add User Function", () => {
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    AdminPage.visitAdminPage();
  });

  it("Verify adding a user to the system", () => {
    // Add User page gets opened
    UserPage.addUser(
      userTestData.UserRole,
      userTestData.Status,
      userTestData.EmployeeName,
      userTestData.UserName,
      userTestData.Password,
      userTestData.ConfirmPassword
    );
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it.skip("Verify that the recently added user has been successfully", () => {
    UserPage.searchUser(userTestData.UserName);
  });

  it("Verify adding a user to the system with existing username", () => {
    // Add User page gets opened
    UserPage.addUser(
      userTestData.UserRole,
      userTestData.Status,
      userTestData.EmployeeName,
      userTestData.UserName,
      userTestData.Password,
      userTestData.ConfirmPassword
    );
    //A success message gets displayed
    cy.contains("Already exists").should("be.visible");
  });
  it.skip("Verify edit user successfully", () => {
    UserPage.editUser(userTestData.UserName);
    cy.get("h6").should("contain", "Edit User");
  });

  it.skip("Verify delete user successfully", () => {
    UserPage.deleteUser(userTestData.UserName);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
