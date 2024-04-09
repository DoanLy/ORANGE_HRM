/// <reference types="cypress" />
import HomePage from "../../models/pages/HomePage.js";
import rgbHex from "rgb-hex";
describe("Test Create Post Function", () => {
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Buzz", "buzz");
  });

  it(" Verify recent post liked successfully", () => {
    cy.wait(3000);
    cy.get(".oxd-grid-1 > :nth-child(1) > .oxd-sheet")
      .find('path[id="heart"]')
      .click()
      .invoke("css", "fill") // Get the fill color of the SVG
      .then((fillColor) => {
        expect(rgbHex(fillColor)).to.eq("e2264d");
      });
  });
});
