import { getByTestId } from 'cypress/support/commands/common';

let profileId: string;

describe('Пользователь заходит на страницу своего профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Пользователь зашёл на страницу профиля и всё загрузилось', () => {
        getByTestId('ProfileCard.firstname').should('have.value', 'Rex');
    });
    it('Попытка отредактировать профиль', () => {
        const first = 'newFirstname';
        const last = 'newLastname';

        cy.updateProfile(first, last);
        cy.getByTestId('ProfileCard.firstname').should('have.value', first);
        cy.getByTestId('ProfileCard.lastname').should('have.value', last);
    });
});
