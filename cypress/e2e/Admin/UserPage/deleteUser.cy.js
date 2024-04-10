/// <reference types="cypress" />

import UserPage from "../../../models/pages/Admin/UserPage.js";
import ResultData from "../../../models/components/ResultData.js";
import HomePage from "../../../models/pages/HomePage.js";
import { UserTestData } from "../../../fixtures/UserTestData.js";
describe("Test Delete User Function", () => {
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });

  it("Verify delete user successfully", () => {
    UserPage.deleteUser(UserTestData.UserName);
    cy.contains(ResultData.DeleteSuccess()).should("be.visible");
  });
});
