class BuzzPage {
  createPost(content) {
    cy.wait(3000);
    cy.get(`textarea[placeholder="What's on your mind?"]`).type(content);
    cy.wait(3000);
    cy.get('button[type="submit"]').click();
    cy.wait(3000);
  }
}

export default new BuzzPage();
