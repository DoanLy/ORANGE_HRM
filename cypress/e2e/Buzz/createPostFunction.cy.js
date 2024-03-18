/// <reference types="cypress" />

describe("Create Post Function", () => {
  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Buzz").click();
    cy.url().should("include", "buzz");
  });
  const contentPost = "abc";
  it.skip("Verify create new post", () => {
    cy.get(`textarea[placeholder="What's on your mind?"]`).type(contentPost);
    cy.get('button[type="submit"]').click();
    cy.contains("Successfully Saved").should("be.visible");
    cy.contains(contentPost).should("be.visible");
  });

  it("Verify Like a post", () => {
    cy.get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
      .find('svg[id="heart-svg"]')
      .click();
  });
});
