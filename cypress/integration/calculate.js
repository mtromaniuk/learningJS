/// <reference types="cypress" />

describe("Calculate test", function() {
    beforeEach('Go to localhost', function() {
        cy
            .visit('http://localhost:5500/work.html')
    })
    it('Check switch calculate mode', function() {
        cy
            .get('#switchTypeBtn').should('have.value', 'true').should('have.text', 'Off')
            .get('#additionNumbers').should('have.attr', 'disabled')
            .get('#subtractionNumbers').should('have.attr', 'disabled')
            .get('#divideNumbers').should('have.attr', 'disabled')
            .get('#multiplicationNumbers').should('have.attr', 'disabled')
            .get('#switchTypeBtn').click()
            .then(function() {
                cy
                    .get('switchTypeBtn').should('have.value', 'false').should('have.text', 'On')
                    .get('#additionNumbers').should('have.attr', 'disable', 'false')
                    .get('#subtractionNumbers').should('have.attr', 'disable', 'false')
                    .get('#divideNumbers').should('have.attr', 'disable', 'false')
                    .get('#multiplicationNumbers').should('have.attr', 'disable', 'false')
            })
    })
})