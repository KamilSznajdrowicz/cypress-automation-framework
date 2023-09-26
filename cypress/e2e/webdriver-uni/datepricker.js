/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";

describe("Test Datepicker via Webdriveruni", () => {
  const homepage_PO = new HomePage_PO();
  beforeEach(() => {
    homepage_PO.visitHomepage();
  });
  it.only("Select date from the datepicker", () => {
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();

    let date = new Date();
    date.setDate(date.getDate() + 10); // get current day + 366 day

    let futureYear = date.getFullYear();
    let futureMonth = date.getMonth();
    let futureDay = date.getDate();

    cy.log(futureDay + futureMonth + futureYear);

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
              }
            });
        });
    }
    function selectFutureDay() {
      cy.get('[class="day"').contains(futureDay).click();
    }
    selectMonthAndYear();
    selectFutureDay();
  });
});
