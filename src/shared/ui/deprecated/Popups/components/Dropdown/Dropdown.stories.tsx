import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'deprecated/shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
        (Story) => (
            <div style={{ padding: 300 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const TopLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'top left',
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'top right',
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'bottom left',
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        trigger: <Button>Open</Button>,
        direction: 'bottom right',
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third' },
        ],
    },
};
