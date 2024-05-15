import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'redesigned/shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text Text Text Text Text Text Text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text Text Text Text Text Text Text',
        variant: 'error',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text Text Text Text Text Text Text',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Text Text Text Text Text Text Text',
        text: 'Text Text Text Text Text Text Text',
        size: 'l',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Text Text Text Text Text Text Text',
        text: 'Text Text Text Text Text Text Text',
        size: 's',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Text Text Text Text Text Text Text',
        text: 'Text Text Text Text Text Text Text',
        size: 'm',
    },
};
