const USERNAME_SEL = 'input[name="username"]';
const PASSWORD_SEL = 'input[type="password"]';
const LOGIN_BTN_SEL = 'button[type="submit"]';

class LoginPage {
  visitLoginPage() {
    return cy.visit("/");
  }
  getUsernameInput() {
    return cy.get(USERNAME_SEL);
  }

  getPasswordInput() {
    return cy.get(PASSWORD_SEL);
  }

  getLoginBtn() {
    return cy.get(LOGIN_BTN_SEL);
  }

  login(username = "Admin", password = "admin123") {
    this.visitLoginPage();
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginBtn().click();
  }
}

export default new LoginPage();
