const TOPBAR_MENU_ITEM_SEL = ".oxd-topbar-body-nav ul li";

class topbarComponent {
  getTopbarMenuItem() {
    return cy.get(TOPBAR_MENU_ITEM_SEL);
  }

  clickItemFromTopBar(itemMenu) {
    this.getTopbarMenuItem().contains(itemMenu).click();
  }
}

export default new topbarComponent();
