// https://docs.cypress.io/api/table-of-contents

describe('Counter Feature', () => {
  it('user can success to page', () => {
    cy.visit('/')
    cy.contains('h1', 'Counter APP')
  })

  it('user can increment counter', () => {
    cy.visit('/')
    cy.get('#counter-info').contains('0')
    cy.contains('button', 'Increment').click()
    cy.get('#counter-info').contains('1')
  })
})

/*
cy.visit ('/') //visita una url
cy.url() // obtiene la url en la que nos encontramos
cy.contains("lebel", "Content") // busca un elemento que contenga el texto "Content" y tenga la etiqueta "lebel"
cy.should('contains', 'Hello Cypress') // verifica que el elemento contenga el texto "Hello Cypress"
cy.should('have.css', 'color', '#ff0000') // verifica que el elemento tenga el color rojo
cy.riquest('POST', 'uri', {}) // hace una peticion POST a la uri
cy.get('.clase') // busca un elemento con la clase "clase"
cy.get('#id') // busca un elemento con el id "id"
cy.get('[data-test-id="myId"]') // busca un elemento con el atributo data-test-id="myId"
cy.click() // hace click en el elemento
cy.type('username') // escribe "username" en el elemento
*/