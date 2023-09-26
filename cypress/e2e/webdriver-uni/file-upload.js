/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Test file upload via webdriveruni", () => {
  const homepage_PO = new HomePage_PO();
  beforeEach(() => {
    homepage_PO.visitHomepage();
  });
  it("Upload a file", () => {
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("input[type=file]").selectFile(
      "cypress/e2e/webdriver-uni/file-upload.js"
    );
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Your file has now been uploaded!");
    });
  });

  it("Upload no file", () => {
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });
});
