import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'CYPRESS article test',
    subtitle: 'e2e testing',
    img: 'https://avatars.githubusercontent.com/u/8908513?s=280&v=4',
    views: 1022,
    createdAt: '16.04.2024',
    userId: '4',
    type: ['SCIENCE'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: '// TODO' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: '// TODO' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}

export {};
