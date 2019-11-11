/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('fails to get count from data', () => {
    cy.get('button')
      .should('have.data', 'count', 0)
      .click()
      .should('have.data', 'count', 1) // throws
  })

  it('gets count from data once', () => {
    cy.get('button')
      .click()
      .click()
      .should('have.data', 'count', 2)
  })

  it('can see new data in the selector only', () => {
    cy.get('[data-count=0]')
      .should('have.data', 'count', 0)
      .click()
    cy.get('[data-count=1]')
      .should('exist')
      .should('have.data', 'count', 1)  // throws
  })
})