import loginPage from "D:/CODE/ORANGE-HRM/cypress/models/pages/HRMLoginPage.js";
/// <reference types="cypress" />
describe("Login Function", () => {
  let testData;
  beforeEach(() => {
    cy.fixture("loginTestData").then((data) => {
      testData = data;
    });
  });
  it("Login with correct Credentials", () => {
    loginPage.login(
      testData.correctCredentials.username,
      testData.correctCredentials.password
    );
    cy.get("h6").should("contain", "Dashboard");
  });

  it("Login with incorrect Credentials", () => {
    loginPage.login(
      testData.incorrectCredentials.username,
      testData.incorrectCredentials.password
    );
    cy.get(".oxd-alert-content").should("contain", "Invalid credentials");
  });
});
