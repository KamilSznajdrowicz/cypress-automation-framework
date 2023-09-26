/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbail");
    cy.get("@productThumbail").its("length").should("be.gt", 5);
    cy.get("@productThumbail").should("include", "Seaweed Conditioner");
  });

  it("Validate product tumbnail", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total of normal of sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail")
      .find(".oneprice")
      .each(($el, index, $list) => {
        cy.log($el.text());
      });
  });

  it("Calculate total of overprices of sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail")
      .find(".pricenew")
      .each(($el, index, $list) => {
        cy.log($el.text());
      });
  });

  it.only("Calculate total of overprices of sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".pricenew")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });

    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("itemOverprice");
    let itemsTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      let itemPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      let i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemsTotal);

      cy.get("@itemOverprice")
        .then(($linkText) => {
          let saleItemsPrice = 0;
          let itemPrice = $linkText.split("$");
          let i;
          for (i = 0; i < itemPrice.length; i++) {
            cy.log(itemPrice[i]);
            saleItemsPrice += Number(itemPrice[i]);
          }
          itemsTotal += saleItemsPrice;
          cy.log("Overprice items total: " + saleItemsPrice);
        })
        .then(() => {
          cy.log("The total price of all products: " + itemsTotal);
          expect(itemsTotal).to.eq(660.5);
        });
    });
  });
});
