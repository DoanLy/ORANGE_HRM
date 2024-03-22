class iconComponent {
  iconDeleteElem() {
    return cy.get(".oxd-icon.bi-trash");
  }

  iconEditElem() {
    return cy.get(".oxd-icon.bi-pencil-fill");
  }
}

export default new iconComponent();
