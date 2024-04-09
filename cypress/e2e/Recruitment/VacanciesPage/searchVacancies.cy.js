/// <reference types="cypress" />
import HomePage from "../../../models/pages/HomePage";
import topbarComponent from "../../../models/components/topbarComponent";
import { randomNumber } from "../../../MathUtils/randomData";
import vacanciesPage from "../../../models/pages/Recruitment/vacanciesPage";

describe("Add vacancies Function", () => {
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

  it("Verify search vacancies", () => {
    vacanciesPage.searchVacancies(
      "Sales Representative",
      "Sales Representative"
    );
  });
});
