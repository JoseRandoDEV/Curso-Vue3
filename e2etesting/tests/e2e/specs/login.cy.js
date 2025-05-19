describe('Login Test Feature', () => {
  it('User can not access to protected routed when is not logged in', () => {
    cy.visit('/')
    cy.url().should('eq','http://localhost:8080/login')
  })
  it('User with wrong credentials can not pass', () => {
    cy.login("demo@demo.com","987654")
    cy.contains('p', 'Invalid email or password')
    cy.visit('/')
    cy.url().should('eq','http://localhost:8080/login')
  })
  it('User can successfully login', () => {
    cy.login("admin@admin.com","12345678")
    cy.url().should('eq','http://localhost:8080/')
  })
})
