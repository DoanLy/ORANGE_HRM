/// <reference types="cypress" />

import UserPage from "../../../models/pages/Admin/UserPage.js";
import HomePage from "../../../models/pages/HomePage.js";

describe("Test Edit User Function", () => {
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });

  it("Verify edit user successfully", () => {
    UserPage.searchUser("Admin");
    UserPage.editUser("Admin");
    cy.get("h6").should("contain", "Edit User");
  });
});
