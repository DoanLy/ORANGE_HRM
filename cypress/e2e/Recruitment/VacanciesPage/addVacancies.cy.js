/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage";
import topbarComponent from "../../../models/components/topbarComponent";
import vacanciesPage from "../../../models/pages/Recruitment/vacanciesPage";
import { randomNumber } from "../../../MathUtils/randomData";
import ResultData from "../../../models/components/ResultData";

describe("Test Add vacancies Function", () => {
  const vacancieData = {
    VacancyName: `Automation Engineer ${randomNumber}`,
    JobTitle: "QA Engineer",
    HiringManager: "Ranga Akunuri",
  };
  beforeEach(() => {
    // Admin page gets opened
    HomePage.clickMainMenuItem("Recruitment", "recruitment");
    topbarComponent.clickItemFromTopBar("Vacancies");
  });

  it("Verify adding vacancies successfully", () => {
    vacanciesPage.addVacancies(
      vacancieData.VacancyName,
      vacancieData.JobTitle,
      vacancieData.HiringManager
    );
    cy.wait(3000);
    topbarComponent.clickItemFromTopBar("Vacancies");
    vacanciesPage.searchVacancies(
      vacancieData.JobTitle,
      vacancieData.VacancyName
    );
    topbarComponent.clickItemFromTopBar("Vacancies");
  });
});
