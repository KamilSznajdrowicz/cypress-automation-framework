/// <reference types="cypress" />

describe("Automation Test Store", () => {
  before(function () {
    //cy.viewport(550, 750);
    cy.fixture("userDetails")
      .as("user")
      .then(function (data) {
        //this.data = data;
        globalThis.data = data; // if upper line doesn't work
      });
  });
  it("Should be able to submit a successful submition via contact us form", () => {
    cy.visit("https://automationteststore.com/");
    cy.xpath("//a[contains(@href, 'contact')]")
      .click()
      .then(function (linkText) {
        cy.log("Clicked on link using text: " + linkText.text());
      }); // cy.get("a[href$='contact']").click()
    cy.get("@user").then((user) => {
      cy.get('[name="first_name"]').type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get('[name="enquiry"]').type("Lorem ipsum");
    cy.get('button[title="Submit"]').click({ force: true });
    cy.xpath("//p[2]").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has completed!");
  });
});
