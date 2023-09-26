/// <reference types="Cypress" />

describe("Verify radio-buttons via webdriveruni", () => {
  before(function () {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").last().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("Validate the states of specyfic radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
    cy.get("[value='lettuce']").check();
    cy.get("[value='lettuce']").should("be.checked");
  });
});
