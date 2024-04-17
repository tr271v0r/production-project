export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '// TODO' },
        body: {
            id: '4',
            first: 'Rex',
            lastname: 'Incc',
            age: 19,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'testuser',
            // eslint-disable-next-line max-len
            avatar: 'https://sun9-44.userapi.com/impg/c858432/v858432560/14fabc/Y3aLwiPNhPE.jpg?size=768x617&quality=96&sign=123e3564f6685164a76c6aebce66ef83&type=album',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}

export {};
