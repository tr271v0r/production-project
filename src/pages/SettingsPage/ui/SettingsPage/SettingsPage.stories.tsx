import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import SettingsPage from './SettingsPage';

const meta: Meta<typeof SettingsPage> = {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const SettingsPageLight: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {},
};

export const SettingsPageDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {},
};

export const SettingsPageOrange: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.ORANGE)(Story)],
    args: {},
};
