/// <reference types="cypress" />

//Elements

const startField =':nth-child(1) > input'
const endField =':nth-child(2) > input'
const clientField = ':nth-child(3) > select'
const roomField = ':nth-child(4) > select'
const billField = ':nth-child(5) > select'
const saveButton = '.blue'
//Actions /funktions

function createReservation (cy, contentToConfirm){
    cy.get(startField).type('2020-11-23')
    cy.get(endField).type('2020-11-30')
    cy.get(clientField).select('Mikael Eriksson (#2)')
    cy.get(roomField).select('Floor 1, Room 101')
    cy.get(billField).select('ID: 1')
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}

//Exports

module.exports = {
    createReservation
}