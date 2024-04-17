import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const ArticleSortSelectorLight: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {},
};

export const ArticleSortSelectorDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {},
};

export const ArticleSortSelectorOrange: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.ORANGE)(Story)],
    args: {},
};
