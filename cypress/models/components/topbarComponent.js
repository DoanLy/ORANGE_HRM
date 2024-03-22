const TOPBAR_MENU_ITEM_SEL = ".oxd-topbar-body-nav ul";

class topbarComponent {
  getTopbarMenuItem() {
    return cy.get(TOPBAR_MENU_ITEM_SEL);
  }

  selectItemFromTopBar(itemMenu) {
    this.getTopbarMenuItem().contains(itemMenu).click();
  }
}

export default new topbarComponent();
