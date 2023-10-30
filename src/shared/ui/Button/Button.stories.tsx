import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: '123',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: '123',
        theme: ThemeButton.OUTLINE,
    },
};
