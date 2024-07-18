describe("deleting list item", () => {
  it("deleting list item", () => {
    cy.visit("https://example.cypress.io/todo");
    const newItem = "Sredi sobu";

    cy.get("[data-test=new-todo").type(`${newItem}{enter}`);

    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", newItem);
    cy.contains(".todo-list li", newItem).should("exist");

    cy.contains(".todo-list li", newItem).within(() => {
      cy.get(".destroy").click({ force: true });
    });
    cy.contains(".todo-list li", newItem).should("not.exist");
  });
});
