describe('Post Test Feature', () => {
    beforeEach( () => { // bucle que se ejecuta antes de cada test
        cy.login("admin@admin.com", "12345678")
        cy.url().should('eq','http://localhost:8080/')
    })
    it('Logged user can access to page posts and view the posts list', () => {
        
        cy.contains('Post list')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    it('Logged user can access to detail post view', () => {
        
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })
    it('Logged user can go brack from detail post view', () => {
        
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
        cy.get('.link').click()
        cy.url().should('eq','http://localhost:8080/')
        cy.contains('Post list')
    })
})