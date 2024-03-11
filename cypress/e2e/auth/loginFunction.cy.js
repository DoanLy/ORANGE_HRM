/// <reference types="cypress" />
describe("Login Function", () => {
  let testData;
  beforeEach(() => {
    cy.fixture("loginOrangeHRM").then((data) => {
      testData = data;
    });
  });
  it("Login with correct Credentials", () => {
    cy.login(
      testData.correctCredentials.username,
      testData.correctCredentials.password
    );
    cy.get("h6").should("contain", "Dashboard");
  });

  it("Login with incorrect Credentials", () => {
    cy.login(
      testData.incorrectCredentials.username,
      testData.incorrectCredentials.password
    );
    cy.get(".oxd-alert-content").should("contain", "Invalid credentials");
  });
});
