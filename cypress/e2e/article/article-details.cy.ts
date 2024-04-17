let currentArticleId = '';
describe('Пользователь заходит на странциу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    describe('Работа с API', () => {
        it('И видит содержимое статьи', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist');
        });

        it('И видит список рекомендаций', () => {
            cy.getByTestId('ArticleRecommendationsList').should('exist');
        });
        it('Отправка комментария', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('AddCommentForm').scrollIntoView();
            cy.addComment('text');
            cy.getByTestId('CommentCard.Content').should('have.length', 1);
        });
        it('Выставление оценки статьи пользователем', () => {
            cy.getByTestId('ArticleDetails.Info');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRate(5, 'some feedback');
            cy.get('[data-selected=true]').should('have.length', 5);
        });
    });

    describe('Работа на стабах (фикстурах)', () => {
        it('Выставление оценки статьи пользователем', () => {
            cy.intercept('GET', '**/articles/*', {
                fixture: 'article-details.json',
            });

            cy.getByTestId('ArticleDetails.Info');
            cy.getByTestId('RatingCard').scrollIntoView();
            cy.setRate(5, 'some feedback');
            cy.get('[data-selected=true]').should('have.length', 5);
        });
    });
});
