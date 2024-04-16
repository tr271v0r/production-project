describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });

    describe('Работа с API', () => {
        it('Список статей успешно подгружается', () => {
            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        });
    });

    describe('Работа на фикстурах', () => {
        it('Список статей успешно подгружается', () => {
            cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });

            cy.getByTestId('ArticleList').should('exist');
            cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        });
    });
    describe('Скипнутые тесты', () => {
        it.skip('Поиск элемента с несуществующим атрибутом data-testid', () => {
            cy.getByTestId('IdontExist').should('exist');
        });
    });
});
