import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

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
    ],
    parameters: {
        layout: 'centered',
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
