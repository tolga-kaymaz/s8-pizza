describe("Pizza Sipariş Formu E2E Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("Inputa bir metin girilebilmelidir", () => {
    cy.get('input[type="text"]')
      .type("Tolga Kaymaz")
      .should("have.value", "Tolga Kaymaz");
  });

  it("Birden fazla malzeme seçilebilmelidir", () => {
    cy.get('input[type="checkbox"]').check([
      "Pepperoni",
      "Sosis",
      "Sucuk",
      "Mısır",
    ],{ force: true });

    cy.get('input[type="checkbox"]:checked')
      .should("have.length.at.least", 4);
  });

  it("Form başarıyla gönderilebilmelidir", () => {
    cy.get('input[type="text"]').type("Tolga");
    cy.get('input[type="radio"][value="L"]').check({ force: true });
    cy.get("select").select("ince");

    cy.get('input[type="checkbox"]').check(
  ["Pepperoni", "Sosis", "Sucuk", "Mısır"],
  { force: true }
);

    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/success");
  });
});