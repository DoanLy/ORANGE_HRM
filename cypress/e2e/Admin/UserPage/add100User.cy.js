/// <reference types="cypress" />
import UserPage from "../../../models/pages/Admin/UserPage.js";
import ResultData from "../../../models/components/ResultData.js";
import { UserTestData } from "../../../fixtures/UserTestData.js";
import HomePage from "../../../models/pages/HomePage.js";
import { randomNumber } from "../../../MathUtils/randomData.js";
describe("Test Add User Function", () => {
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });
  Cypress._.times(3, (k) => {
    it(`Verify add user successfully time ${k + 1}`, () => {
      // Add User page gets opened
      UserPage.addUser(
        UserTestData.UserRole,
        UserTestData.Status,
        UserTestData.EmployeeName,
        `Test${randomNumber}${k + 1}`,
        // UserTestData.UserName,
        UserTestData.Password,
        UserTestData.ConfirmPassword
      );
      cy.contains(ResultData.SaveSuccess()).should("be.visible");
    });
  });
});
