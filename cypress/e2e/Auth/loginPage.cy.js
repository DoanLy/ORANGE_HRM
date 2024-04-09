import LoginPage from "../../models/pages/Auth/LoginPage.js";
/// <reference types="cypress" />
describe("Test Login Function", () => {
  let testData;
  beforeEach(() => {
    cy.fixture("loginTestData").then((data) => {
      testData = data;
    });
  });
  it("Verify login with correct Credentials", () => {
    LoginPage.login(
      testData.correctCredentials.username,
      testData.correctCredentials.password
    );
    cy.get("h6").should("contain", "Dashboard");
  });

  it("Verify login with incorrect Credentials", () => {
    LoginPage.login(
      testData.incorrectCredentials.username,
      testData.incorrectCredentials.password
    );
    cy.get(".oxd-alert-content").should("contain", "Invalid credentials");
  });

  it("Verify login with incorrect Credentials", () => {
    LoginPage.login(
      testData.incorrectCredentials.username,
      testData.incorrectCredentials.password
    );
    cy.get(".oxd-alert-content").should("contain", "Invalid credentials");
  });
});
