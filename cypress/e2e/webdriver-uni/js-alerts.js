/// <reference types="Cypress" />

describe("Handle js alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Walidate js confirm alert box works correctly when clicking ok", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Press a button!");
    });
    cy.on("window:confirm", (str) => {
      return true; // press ok
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Walidate js confirm alert box works correctly when clicking cancel", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();
    cy.on("window:confirm", (str) => {
      return false; // press cancel
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it.only("Walidate js confirm alert box using a stub", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    const stub = cy.stub();
    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
