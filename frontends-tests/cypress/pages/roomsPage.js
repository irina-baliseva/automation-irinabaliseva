/// <reference types="cypress" />

//Elements

const createRoomButton ='h2 > .btn'
const threepoints = ':nth-child(3) > .action > img'
const deleteButton = '.menu > :nth-child(2)'

//Actions/funktions

function clickcreateRoomButton(cy, contentToConfirm) {
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}

function clickThreePointsDelete(cy) {
    cy.get(threepoints).click()
    cy.get(deleteButton).click()
}

//Exports
module.exports = {
    clickcreateRoomButton,
    clickThreePointsDelete
}