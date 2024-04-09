/// <reference types="cypress" />
import LoginPage from "../../../models/pages/Auth/LoginPage.js";
import UserPage from "../../../models/pages/Admin/UserPage.js";
import HomePage from "../../../models/pages/HomePage.js";

describe("Test Search User Function", () => {
  beforeEach(() => {
    LoginPage.login();
    // Admin page gets opened
    HomePage.clickMainMenuItem("Admin", "admin");
  });

  it("Verify search user", () => {
    UserPage.searchUser("Admin");
  });
});