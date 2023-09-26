class AutoStore_HairCare_PO {
  AddItemsToBacket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBacket(element).then(() => {
        //  debugger;
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  }
}
export default AutoStore_HairCare_PO;
