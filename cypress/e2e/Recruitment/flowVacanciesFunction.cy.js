/// <reference types="cypress" />
import HRMLoginPage from "../../models/pages/HRMLoginPage";
import HomePage from "../../models/pages/HomePage";
import ResultData from "../../models/components/ResultData";
import topbarComponent from "../../models/components/topbarComponent";
import vacanciesPage from "../../models/pages/vacanciesPage";
import { randomNumber } from "../../MathUtils/randomData";

describe("Add vacancies Function", () => {
  const vacancieData = {
    VacancyName: `Automation Engineer ${randomNumber}`,
    JobTitle: "QA Engineer",
    HiringManager: "Ranga Akunuri",
  };
  beforeEach(() => {
    HRMLoginPage.login();
    // Admin page gets opened
    HomePage.clickMenuItem("Recruitment", "recruitment");
    topbarComponent.clickItemFromTopBar("Vacancies");
  });

  it("Verify adding vacancies", () => {
    vacanciesPage.addVacancies(
      vacancieData.VacancyName,
      vacancieData.JobTitle,
      vacancieData.HiringManager
    );

    // cy.contains(ResultData.SaveSuccess()).should("be.visible");
  });

  it("Verify search vacancies", () => {
    vacanciesPage.searchVacancies(
      vacancieData.VacancyName,
      vacancieData.JobTitle
    );
  });
});
