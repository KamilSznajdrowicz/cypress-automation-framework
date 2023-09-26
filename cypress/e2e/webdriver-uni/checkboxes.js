/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(function () {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check, uncheck and validate checkbox", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");
    cy.get(":nth-child(5) > input").uncheck().should("not.be.checked");
  });

  it("Check multiple checkboxes", () => {
    // cy.get("#checkboxes > :nth-child(1) > input").check();
    cy.get("input[type='checkbox']")
      .check(["option1", "option-2", "option-3", "option-4"])
      .should("be.checked");
    cy.get("input[type='checkbox']")
      .uncheck(["option1", "option-2", "option-3", "option-4"])
      .should("not.be.checked");
  });
});
