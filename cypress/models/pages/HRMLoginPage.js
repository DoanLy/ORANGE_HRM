import HomePageComponent from "../components/HomePageComponent.js";
const USERNAME_SEL = 'input[name="username"]';
const PASSWORD_SEL = 'input[type="password"]';
const LOGIN_BTN_SEL = 'button[type="submit"]';

class loginPage {
  usernameInput() {
    return cy.get(USERNAME_SEL);
  }

  passwordInput() {
    return cy.get(PASSWORD_SEL);
  }

  loginBtn() {
    return cy.get(LOGIN_BTN_SEL);
  }

  login(username = "Admin", password = "admin123") {
    HomePageComponent.visitHomePage();
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginBtn().click();
  }
}

export default new loginPage();
