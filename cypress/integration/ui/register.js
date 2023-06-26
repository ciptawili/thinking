const selector = require("../../helper/selector");

const getIframe = () => {
    return cy
    .get('iframe[id=snap-midtrans]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

const getIframeIssuing = () => {
    return cy
    .get('iframe[class="iframe-3ds"]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

describe('Create new account', () => {
    before('verify user open registration page', () => {
        cy.visit('https://www.cermati.com/app/gabung')
        cy.get(selector.fieldEmail).should('be.visible')
        cy.get(selector.fieldPhone).should('be.visible')
        cy.get(selector.fieldPassword).should('be.visible')
        cy.get(selector.fieldConfirmPaassword).should('be.visible')
        cy.get(selector.fieldFirsName).should('be.visible')
        cy.get(selector.buttonRegister).should('be.visible')
    });

    context('Success register new user', () => {
        it('success fill the form', () => {
            cy.get(selector.fieldEmail).click()
            cy.get(selector.fieldEmail).type('yuhtest1@mail.com')
            cy.get(selector.fieldPhone).click()
            cy.get(selector.fieldPhone).type('08129232323')
            cy.get(selector.fieldPassword).click()
            cy.get(selector.fieldPassword).type('Test@123')
            cy.get(selector.fieldConfirmPaassword).click()
            cy.get(selector.fieldConfirmPaassword).type('Test@123')
            cy.get(selector.fieldFirsName).click()
            cy.get(selector.fieldFirsName).type('Test')
            cy.get(selector.fieldLastName).click()
            cy.get(selector.fieldLastName).type('Test')
        });
    
        it('success choose city', () => {
            cy.get(selector.fieldCityAndProvince).click()
            cy.get(selector.fieldCityAndProvince).type('Tangerang')
            cy.wait(2000)
            cy.get(selector.fieldCityAndProvince).type('{enter}')
        });
    
        it('create new user', () => {
            cy.get(selector.buttonRegister).should('be.visible')
            cy.get(selector.buttonRegister).click()
            cy.get(selector.buttonSendWa).should('be.visible')
            cy.get(selector.buttonSendSms).should('be.visible')
        });

        it('success create new user', () => {
            cy.get(selector.buttonSendWa).click()
        });
    })
    
})