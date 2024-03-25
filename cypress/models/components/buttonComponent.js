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
  comfirmDialogDelete() {
    return cy.get(
      ".oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin"
    );
  }
  cancelDialogDelete() {
    return cy.get(
      ".oxd-button.oxd-button--medium.oxd-button--text.orangehrm-button-margin"
    );
  }
}

export default new buttonComponent();
