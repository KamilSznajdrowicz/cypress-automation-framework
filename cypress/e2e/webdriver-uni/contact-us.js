import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  const homepage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data; // if upper line doesn't work
    });
  });
  beforeEach(() => {
    homepage_PO.visitHomepage();
    //cy.wait(10000); - poczekaj 10 sekund
    homepage_PO.clickOn_ContactUs_Button();
    //cy.pause() - pauza
  });
  it.skip("Should be able to submit a successful submition via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8"); // coding
    cy.title().should("include", "Contact Us"); // title
    cy.url().should("include", "contactus.html"); // url
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Lorem ipsum",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should be able to submit a successful submition via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8"); // coding
    cy.title().should("include", "Contact Us"); // title
    cy.url().should("include", "contactus.html"); // url
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Lorem ipsum",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Shouldn't be able to submit a successful submition via contact us form as all fields are required", () => {
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "Lorem ipsum",
      "body",
      "Error: Invalid email address"
    );
  });
});
