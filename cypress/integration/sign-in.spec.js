describe("Login Page", () => {
  it("Successful Login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("derek@browserstack.com");
    cy.get("input[name=password]").type("Password1");
    cy.get("input[type=submit]").click();
    cy.get(".lead").should("contain", "Welcome Derek Ross");
  });
  it("Failed Login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=email]").type("derek@browserstack.com");
    cy.get("input[name=password]").type("Password2");
    cy.get("input[type=submit]").click();
    cy.get(".alert").should("contain", "Invalid Credentials");
  });
  it("User Already Exists", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".my-1 > a").click();
    cy.get(":nth-child(1) > input").type("John Doe");
    cy.get(":nth-child(2) > input").type("john.doe@browserstack.com");
    cy.get(".form > :nth-child(3) > input").type("Password1");
    cy.get(":nth-child(4) > input").type("Password1");
    cy.get(".btn").click();
    cy.get(".alert").should("contain", "User already exists");
  });
});
