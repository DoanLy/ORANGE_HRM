class HomePageComponent {
  visitHomePage() {
    return cy.visit("/");
  }
}

module.exports = new HomePageComponent();
