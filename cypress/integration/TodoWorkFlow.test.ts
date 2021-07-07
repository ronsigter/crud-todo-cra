import { todos } from '../../src/mock'

describe('Welcome page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000')
    cy.visit('/')
  })

  it('Creates 5 Activities', () => {
    cy.get('[data-cy=todos-blank-state]').should('be.visible')
    cy.get('[data-cy=create-button]').click()
    cy.get('[data-cy=title-input]').type('initial title')
    cy.get('[data-cy=description-input]').type('initial description')
    cy.get('[data-cy=submit-button]').click()

    todos.map((todo) => {
      cy.get('[data-cy=todos-success-state]').should('be.visible')
      cy.get('[data-cy=create-button]').click()
      cy.get('[data-cy=title-input]').type(todo.title)
      cy.get('[data-cy=description-input]').type(todo.description)
      cy.get('[data-cy=submit-button]').click()
    })
  })
})
