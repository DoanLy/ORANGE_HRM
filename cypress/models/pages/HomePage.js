const MENU_ITEM_SEL = ".oxd-main-menu li";

class HomePage {
  visitHomePage() {
    return cy.visit("/");
  }
  MenuItemElem() {
    return cy.get(MENU_ITEM_SEL);
  }

  clickMenuItem(menuItemName, resultUrl) {
    this.MenuItemElem().contains(menuItemName).click();
    cy.url().should("include", resultUrl);
  }
}

export default new HomePage();
