import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
    title: 'deprecated/shared/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardLight: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {
        children: (
            <div>
                <Text text="Карточка для светлой темы" />
            </div>
        ),
    },
};

export const CardDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        children: (
            <div>
                <Text text="Карточка для темной темы" />
            </div>
        ),
    },
};

export const CardOrange: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.ORANGE)(Story)],
    args: {
        children: (
            <div>
                <Text text="Карточка для оранжевой темы" />
            </div>
        ),
    },
};
