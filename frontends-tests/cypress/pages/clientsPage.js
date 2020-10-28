/// <reference types="cypress" />

//Elements

const createClientButton ='h2 > .btn'
const threepoints = ':nth-child(1) > .action > img'
const editButton = '.menu > :nth-child(1)'

//Actions/funktions

function clickCreateClientButton(cy, contentToConfirm) {
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}

function clickThreePointsEdit(cy) {
    cy.get(threepoints).click()
    cy.get(editButton).click()
}

//Exports
module.exports = {
    clickCreateClientButton,
    clickThreePointsEdit
}