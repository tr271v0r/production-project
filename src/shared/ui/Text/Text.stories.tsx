import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text Text Text Text Text Text Text',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text Text Text Text Text Text Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text Text Text Text Text Text Text',
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text Text Text Text Text Text Text',
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text Text Text Text Text Text Text',
        theme: TextTheme.ERROR,
    },
};
