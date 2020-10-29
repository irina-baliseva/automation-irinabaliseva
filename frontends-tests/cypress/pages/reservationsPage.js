/// <reference types="cypress" />

//Elements

const createReservationButton = 'h2 > .btn'
const threePoint = ':nth-child(2) > .action > img'
const deleteButton = '.menu > :nth-child(2)'

//Actions /funktions

function clickCreateReservationButton (cy, contentToConfirm){
    cy.get(createReservationButton).click()
    cy.contains(contentToConfirm)
}

function clickthreePointDelete (cy, contentToConfirm){
    cy.get(threePoint).click()
    cy.get(deleteButton).click()
    cy.contains(contentToConfirm)
}

//Exports

module.exports = {
    clickCreateReservationButton,
    clickthreePointDelete
}