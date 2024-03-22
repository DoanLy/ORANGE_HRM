class tableComponent {
  getTableRow() {
    return cy.get(".oxd-table-body").find(".oxd-table-card");
  }

  handleActionOnTableRow(dataTest, fn) {
    this.getTableRow().each((item, index) => {
      const t = item.text();
      if (t.includes(dataTest)) {
        fn().eq(index).click();
      }
    });
  }
}
export default new tableComponent();
