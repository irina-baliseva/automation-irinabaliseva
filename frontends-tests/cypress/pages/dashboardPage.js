/// <reference types="cypress" />

//elements

const titleOfDashboardPage= 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewButtonRooms =':nth-child(1) > .btn'
const viewButtonClients ='.blocks > :nth-child(2) > .btn'
const viewButtonReservations =':nth-child(4) > .btn'

//actions/ funktions

function checkTitleOfDashboardPage (cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout (cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function viewRooms(cy, contentToConfirm) {
    cy.get(viewButtonRooms).click()
    cy.contains(contentToConfirm)
}

function viewClients(cy, contentToConfirm) {
    cy.get(viewButtonClients).click()
    cy.contains(contentToConfirm)
}

function viewReservations(cy, contentToConfirm) {
    cy.get(viewButtonReservations).click()
    cy.contains(contentToConfirm)
}

//exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    viewRooms,
    viewClients,
    viewReservations
}