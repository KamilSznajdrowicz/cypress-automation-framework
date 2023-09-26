class AutoStore_Homepage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("autostore_homepage"));
  }
  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}
export default AutoStore_Homepage_PO;
