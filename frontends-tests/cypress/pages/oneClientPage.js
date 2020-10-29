/// <reference types="cypress" />

import faker from 'faker'
//Elements

const phoneField =':nth-child(5) > input'
const saveButton = '.blue'

//Actions/funktions

function editClient(cy) {
    let phoneNumber= faker.phone.phoneNumber()
    cy.get(phoneField).clear().type(phoneNumber)
    cy.get(saveButton).click()
    cy.contains(phoneNumber)
}


//Exports
module.exports = {
    editClient
}