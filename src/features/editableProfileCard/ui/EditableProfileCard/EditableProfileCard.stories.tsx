import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
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
type Story = StoryObj<typeof EditableProfileCard>;

export const EditableProfileCardLight: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        )
    ],
    args: {

    },
};

export const EditableProfileCardDark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        )
    ],
    args: {

    },
};

export const EditableProfileCardOrange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        )
    ],
    args: {

    },
};