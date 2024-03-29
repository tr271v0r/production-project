import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Article } from '@/entities/Article';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({
                articlesPage: {

                },
            })(Story)
        ),
        (Story) => (
            RouterDecorator()(Story)
        ),
    ],
    parameters: {
        layout: 'fullscreen',
        mockData: [
            {
                url: `${__API__}/articles?_expand=user&_limit=9&_page=12&_sort=createdAt&_order=asc&q=`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const ArticlesPageLight: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
    args: {

    },
};

export const ArticlesPageDark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
    args: {

    },
};

export const ArticlesPageOrange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        ),
    ],
    args: {

    },
};
