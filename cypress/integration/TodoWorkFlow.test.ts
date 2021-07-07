import { todos } from '../../src/mock'

describe('Welcome page', () => {
  before(() => {
    cy.log('Visiting http://localhost:3000')
    cy.visit('/')
  })

  it('Creates 5 Activities', () => {
    cy.get('[data-cy=todos-blank-state]').should('be.visible')
    cy.get('[data-cy=create-button]').click()
    cy.get('[data-cy=title-input]').type('initial title')
    cy.get('[data-cy=description-input]').type('initial description')
    cy.get('[data-cy=submit-button]').click()

    todos.slice(0, 2).map((todo) => {
      cy.get('[data-cy=todos-success-state]').should('be.visible')
      cy.get('[data-cy=create-button]').click()
      cy.get('[data-cy=title-input]').type(todo.title)
      cy.get('[data-cy=description-input]').type(todo.description)
      cy.get('[data-cy=submit-button]').click()
    })
  })

  it('Deletes 1 activity', () => {
    cy.get('[data-cy=todos-success-state]').should('be.visible')
    cy.get('[data-cy=todos-0-checkbox]').click()
    cy.get('[data-cy=delete-button]').click()
  })

  it('Deletes All Activities', () => {
    cy.get('[data-cy=todos-success-state]').should('be.visible')
    cy.get('[data-cy=select-all-button]').click()
    cy.get('[data-cy=delete-button]').click()
    cy.get('[data-cy=todos-blank-state]').should('be.visible')
  })
})
