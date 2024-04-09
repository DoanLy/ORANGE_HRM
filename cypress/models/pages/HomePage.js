import LoginPage from "./Auth/LoginPage";
const MENU_ITEM_SEL = ".oxd-main-menu li";

class HomePage {
  getMainMenuItem() {
    return cy.get(MENU_ITEM_SEL);
  }

  clickMainMenuItem(menuItemName, resultUrl) {
    LoginPage.login();
    this.getMainMenuItem().contains(menuItemName).click();
    cy.url().should("include", resultUrl);
  }
}

export default new HomePage();
