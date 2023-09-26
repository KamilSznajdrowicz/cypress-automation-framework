/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng"); // have.value to value = testng
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery"); // contains text
  });

  it.only("Select specific values via select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven"); // have.value to value = testng
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
  });
});
