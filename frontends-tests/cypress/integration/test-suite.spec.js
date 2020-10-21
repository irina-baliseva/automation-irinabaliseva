/// <reference types="cypress" />

//test suite
describe('Test suite', function() {
    //test case
    it('test case 1- Logga in/Logga ut', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })

    it('test case 2- Skapa ett rum', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('double')//??????????????????select val olika
        cy.get(':nth-child(2) > input').type('103')//???????????trycka på pilarna
        cy.get(':nth-child(3) > input').type('1')//pilarna
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('1800')//pilarna
        cy.get(':nth-child(6) > select').select(['Balcony','Ensuite'])
        cy.get('.blue').click()
        cy.contains('Room 103')

    })
    
    it('test case 3-Ta bort ett rum', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Rooms')

    })

    it('test case 4-Redigera information om en kund', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get(':nth-child(1) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('Client:')
        cy.get(':nth-child(5) > input').clear().type('073 666 99 11')
        cy.get('.blue').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Tester Hotel Overview')
        
    })

    it('test case 5- Skapa ett kvitto', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get('h2 > .btn').click()
        cy.contains('New Bill')
        cy.get('input').type('1000')
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.contains('Bills')
    })

    it('test case 6-Redigera ett kvitto', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Bills')
        cy.get(':nth-child(2) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.contains('Bill:')
        cy.get('.checkbox').click()
        cy.get('.blue').click()
        cy.contains('Bills')
    })

    it('', function () {
        
    })

})