describe("check finished tasks", () => {
  it("should check finished tasks", () => {
    cy.visit("https://example.cypress.io/todo");
    const newItem = "Sredi sobug";
    cy.get("[data-test=new-todo").type(`${newItem}{enter}`);

    cy.get(".todo-list li")
      .should("have.length", 3)
      .last()
      .should("have.text", newItem);
    cy.contains(".todo-list li", newItem).should("exist");
    cy.get(".todo-list li").each(($el) => {
      cy.wrap($el).find(".toggle").check();
    });
  });
});
