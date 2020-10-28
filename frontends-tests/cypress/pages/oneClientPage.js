/// <reference types="cypress" />

import faker from 'faker'
//Elements

const phoneField =':nth-child(5) > input'
const saveButton = '.blue'

//Actions/funktions

function editClient(cy, contentToConfirm) {
    cy.get(phoneField).clear().type(faker.phone.phoneNumber())
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports = {
    editClient
}