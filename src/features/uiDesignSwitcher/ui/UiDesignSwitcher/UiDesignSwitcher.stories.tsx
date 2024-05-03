import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta: Meta<typeof UiDesignSwitcher> = {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;

export const UiDesignSwitcherLight: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        )
    ],
    args: {

    },
};

export const UiDesignSwitcherDark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        )
    ],
    args: {

    },
};

export const UiDesignSwitcherOrange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        )
    ],
    args: {

    },
};