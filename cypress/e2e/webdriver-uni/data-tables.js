/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Handling data via webdriveruni", () => {
  const homepage_PO = new HomePage_PO();
  beforeEach(() => {
    homepage_PO.visitHomepage();
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("Calculate and assert the total age of all users", () => {
    let userDatails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDatails[index] = $el.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDatails.length; i++) {
          if (Number(userDatails[i])) {
            numb += Number(userDatails[i]);
          }

          // cy.log(userDatails[i]);
        }
        cy.log("Found total age: " + numb);
        expect(numb).to.eq(322);
      });
  });

  it.only("Calculate and assert the age of given user based on last name", () => {
    let userDatails = [];
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.eq("80");
          });
      }
    });
  });
});
