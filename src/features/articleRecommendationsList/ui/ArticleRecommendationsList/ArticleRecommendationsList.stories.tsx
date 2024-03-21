import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            StoreDecorator({
                
            })(Story)
        )
    ],
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const ArticleRecommendationsListLight: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        )
    ],
    args: {

    },
};

export const ArticleRecommendationsListDark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        )
    ],
    args: {

    },
};

export const ArticleRecommendationsListOrange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        )
    ],
    args: {

    },
};