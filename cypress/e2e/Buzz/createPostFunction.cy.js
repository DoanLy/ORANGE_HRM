/// <reference types="cypress" />
import HRMLoginPage from "../../models/pages/HRMLoginPage.js";
import HomePage from "../../models/pages/HomePage.js";
import ResultData from "../../models/components/ResultData.js";
describe("Create Post Function", () => {
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Buzz", "buzz");
  });

  const contentPost = "abc";
  it("Verify create new post", () => {
    cy.get(`textarea[placeholder="What's on your mind?"]`).type(contentPost);
    cy.get('button[type="submit"]').click();
    cy.contains(ResultData.SaveSuccess()).should("be.visible");
    cy.contains(contentPost).should("be.visible");
  });

  it("verify the feature of liking posts", () => {
    cy.get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
      .find('svg[id="heart-svg"]')
      .click();
  });
});
