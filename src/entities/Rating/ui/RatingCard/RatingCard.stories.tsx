import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const WithoutRate: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {
        feedbackTitle: 'Ваш отзыв очень важен для нас (нет)',
        title: 'Как тебе такой стори-кейс?',
        rate: 0,
    },
};

export const WithRate: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {
        feedbackTitle: 'Ваш отзыв очень важен для нас (нет)',
        title: 'Как тебе такой стори-кейс?',
        rate: 4,
    },
};
