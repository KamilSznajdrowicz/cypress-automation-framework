class Contact_Us_PO {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    comment,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('[name="email"]').should("have.attr", "name", "email");
    cy.get('[name="message"]').type(comment);
    cy.get('[type="submit"]').click({ force: true });
    cy.get($selector).contains(textToLocate, { timeout: 10000 });
    // cy.screenshot();
    // cy.screenshot("Make a contact us form submission");
  }
}
export default Contact_Us_PO;
