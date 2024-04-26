import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'Clear variant',
        variant: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline variant',
        variant: 'outline',
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: '123',
        variant: 'outline',
        size: 'm',
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: '123',
        variant: 'outline',
        size: 'l',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: '123',
        variant: 'outline',
        size: 'xl',
    },
};

export const Disabled: Story = {
    args: {
        children: '>',
        variant: 'outline',
        disabled: true,
    },
};
