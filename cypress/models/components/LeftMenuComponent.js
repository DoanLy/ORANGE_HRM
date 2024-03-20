const MENU_ITEM_SEL = ".oxd-main-menu li";

class LeftMenuComponent {
  MenuItemElem() {
    return cy.get(MENU_ITEM_SEL);
  }
}

export default new LeftMenuComponent();
