/// <reference types="cypress" />

describe("add a task to the list", () => {
  it("add a task to the list", () => {
    cy.visit("https://example.cypress.io/todo");
    const newItem = "Sredi sobu";

    cy.get("[data-test=new-todo]").type(`${newItem}{enter}`);
  });
});
