/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Handling IFrame & Modals", () => {
  const homepage_PO = new HomePage_PO();
  beforeEach(() => {
    homepage_PO.visitHomepage();
  });
  it.only("Handle webdriveruni iframe and modal", () => {
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include("Welcome to webdriveruniversity.com");
    });

    cy.get("@modal").contains("Close").click();
  });
});
