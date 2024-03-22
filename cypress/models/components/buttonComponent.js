class buttonComponent {
  BtnSaveElem() {
    return cy.get("button[type='submit']").contains("Save");
  }

  clickBtnSave() {
    this.BtnSaveElem().click();
  }
  getBtnSearch() {
    return cy.get("button[type='submit']");
  }
  clickBtnSearch() {
    this.getBtnSearch().click({ force: true });
  }
}

export default new buttonComponent();
