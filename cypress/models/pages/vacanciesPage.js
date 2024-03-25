import buttonComponent from "../components/buttonComponent";
import tableComponent from "../components/tableComponent";
class vacanciesPage {
  addVacancies(VacancyName, JobTitle, HiringManager) {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ".oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(VacancyName);
    cy.get(".oxd-select-text").click();
    cy.contains(JobTitle).click();
    cy.get(".oxd-autocomplete-text-input > input").type(HiringManager);
    cy.wait(2000);
    cy.contains(HiringManager).click();
    buttonComponent.clickBtnSave();
  }

  selectOptionFromDropdown(optionSelected) {
    cy.get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .each((item) => {
        let t = item.text();
        if (t.includes(optionSelected)) {
          cy.wrap(item).click();
        }
      });
  }
  searchVacancies(JobTitle, VacancyName) {
    //get list Job Title
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.wait(3000);
    this.selectOptionFromDropdown(JobTitle);

    //get list vacancies
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.wait(3000);
    this.selectOptionFromDropdown(VacancyName);
    //click button search
    buttonComponent.clickBtnSearch();
    tableComponent.getTableRow().should("contain", VacancyName);
  }
}

export default new vacanciesPage();
