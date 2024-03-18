/// <reference types="cypress" />

describe("Add vacancies Function", () => {
  const vacancieData = {
    VacancyName: "Automation Engineer",
    JobTitle: "QA Engineer",
    HiringManager: "Virat Kohli",
  };
  beforeEach(() => {
    cy.login();
    // Admin page gets opened
    cy.get(".oxd-main-menu li").contains("Recruitment").click();
    cy.url().should("include", "recruitment");
    cy.get(".oxd-topbar-body-nav").find("li a").contains("Vacancies").click();
  });

  it("Verify adding vacancies", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ".oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(vacancieData.VacancyName);
    cy.get(".oxd-select-text").click();
    cy.contains(vacancieData.JobTitle).click();
    cy.get(".oxd-autocomplete-text-input > input").type(
      vacancieData.HiringManager
    );
    cy.wait(2000);
    cy.contains(vacancieData.HiringManager).click();
    cy.get('button[type="submit"]').click();
    cy.contains("Successfully Saved").should("be.visible");
  });

  it("Verify search vacancies", () => {
    //get list dropdown Job title
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.wait(3000);
    cy.get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .each((item) => {
        let t = item.text();
        if (t.includes(vacancieData.JobTitle)) {
          cy.wrap(item).click();
        }
      });
    //get list vacancies
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.wait(3000);
    cy.get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .each((item) => {
        let t = item.text();
        if (t.includes(vacancieData.VacancyName)) {
          cy.wrap(item).click();
        }
      });
    //click button search
    cy.get('button[type="submit"]').click();
  });
});
