/// <reference types="cypress" />
import HRMLoginPage from "../../models/pages/HRMLoginPage.js";
import HomePage from "../../models/pages/HomePage.js";
import ResultData from "../../models/components/ResultData.js";
describe("Create Post Function", () => {
  let testData;
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Buzz", "buzz");
    cy.fixture("BuzzTestData").then((data) => {
      testData = data;
    });
  });

  it("Verify create new post successfully", () => {
    cy.get(`textarea[placeholder="What's on your mind?"]`).type(
      testData.content
    );
    cy.wait(3000);
    cy.get('button[type="submit"]').click();
    cy.wait(3000);

    // cy.contains(ResultData.SaveSuccess()).should("be.visible");
    cy.contains(testData.content).should("be.visible");
  });

  it(" Verify recent post liked successfully", () => {
    cy.get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
      .find('svg[id="heart-svg"]')
      .click();
  });
});
