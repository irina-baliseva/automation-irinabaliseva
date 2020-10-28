/// <reference types="cypress" />

import  faker from 'faker'

//Elements

const saveButton ='.blue'
const categoryField =':nth-child(1) > select'
const numberField =':nth-child(2) > input'
const floorField =':nth-child(3) > input'
const availableCheckbox ='.checkbox'
const priceField =':nth-child(5) > input'
const featuresField =':nth-child(6) > select'

//Actions/funktions

function createRoom (cy){
    cy.get(categoryField).select('double')
    let roomNumber=faker.random.number({min:100, max:150})
    cy.get(numberField).type(roomNumber)
    cy.get(floorField).type(faker.random.number(8))
    cy.get(availableCheckbox).click()
    cy.get(priceField).type(faker.random.number({min:1000, max:3000}))
    cy.get(featuresField).select(['Balcony','Ensuite'])
    cy.get(saveButton).click()
    cy.contains(roomNumber)
}


//Exports

module.exports = {
    createRoom
}