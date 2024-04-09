/// <reference types="cypress" />
import HomePage from "../../models/pages/HomePage.js";
import BuzzPage from "../../models/pages/Buzz/BuzzPage.js";

describe("Test Create Post Function", () => {
  let testData;
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Buzz", "buzz");
    cy.fixture("BuzzTestData").then((data) => {
      testData = data;
    });
  });

  it("Verify create new post successfully", () => {
    BuzzPage.createPost(testData.content);
    cy.contains(testData.content).should("be.visible");
  });
});
