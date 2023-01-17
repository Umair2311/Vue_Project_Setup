// https://docs.cypress.io/api/introduction/api.html

describe("My First Login Test Case", () => {
  it("login test case", () => {
    cy.visit("/login");
    cy.get("#exampleFormControlInput1")
      .click({ force: true })
      .type("test@test.co");
    cy.get("#exampleFormControlInput2").click({ force: true }).type("123456");
    cy.get("#loginId").click({ force: true });
    cy.url().should("include", "/home");
  });
});
