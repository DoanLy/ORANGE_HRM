class CorporateBrandingPage {
  getLogoInputFile() {
    return cy.get(":nth-child(1) > .orangehrm-file-input > .oxd-input-group");
  }
  getClientBanneInputFile() {
    return cy.get(":nth-child(2) > .orangehrm-file-input > .oxd-input-group");
  }

  getLoginBannerInputFile() {
    return cy.get(".--offset-row-2 > .orangehrm-file-input > .oxd-input-group");
  }
  uploadLogo(getInputFile, urlFile) {
    getInputFile()
      .find('input[type="file"]')
      .selectFile(urlFile, { force: true });
  }
}

export default new CorporateBrandingPage();
