/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    cy.visit('http://localhost:5173/')
  })

  it('Tile click is logged into sidebar', () => {
    cy.get('[data-cy=A1]').should('be.visible' )

    cy.get('[data-cy=A1]').click()

    cy.get('[data-cy=sidebar]').should('contain', 'A1')
  })

  it('Chessboard reset clears log', () => {
    cy.get('[data-cy=reset]').should('be.visible' )

    cy.get('[data-cy=reset]').click()

    cy.get('[data-cy=sidebar]').should('be.empty')
  })

})
