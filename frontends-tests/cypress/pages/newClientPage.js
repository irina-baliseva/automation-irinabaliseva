/// <reference types="cypress" />

import faker from 'faker'
//Elements

const nameField =':nth-child(1) > input'
const emailField =':nth-child(2) > input'
const phoneField =':nth-child(3) > input'
const saveButton = '.blue'

//Actions/funktions

function createClient(cy) {
    cy.get(nameField).type(faker.name.firstName(), ' ', faker.name.lastName())
    let email= faker.internet.email()
    cy.get(emailField).type(email)
    cy.get(phoneField).type(faker.phone.phoneNumber())
    cy.get(saveButton).click()
    cy.contains(email)
}

//Exports
module.exports = {
    createClient
}