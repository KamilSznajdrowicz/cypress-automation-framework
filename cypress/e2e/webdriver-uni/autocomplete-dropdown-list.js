/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {
  const homepage_PO = new HomePage_PO();
  beforeEach(() => {
    homepage_PO.visitHomepage();
  });
  it.only("Select specific product via autocomplete list", () => {
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Avacado";

        if (prod === productToSelect) {
          //$el.click(); - older version
          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";

          if (prod === productToSelect) {
            //$el.click(); - older version
            $el.trigger("click");

            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
