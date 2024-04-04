import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
        (Story) => (
            <div style={{ padding: 300 }}><Story /></div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
    args: {
        value: '123',
        items: [
            { content: '1asdasdasd23', value: '1' },
            { content: '1asdasdasd23', value: '2' },
            { content: '1asdasdasd23', value: '3' },
            { content: '1asdasdasd23', value: '4' },
            { content: '1asdasdasd23', value: '5' },
        ],
    },
};

export const topLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '1asdasdasd23', value: '1' },
            { content: '1asdasdasd23', value: '2' },
            { content: '1asdasdasd23', value: '3' },
            { content: '1asdasdasd23', value: '4' },
            { content: '1asdasdasd23', value: '5' },
        ],
    },
};

export const topRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '1asdasdasd23', value: '1' },
            { content: '1asdasdasd23', value: '2' },
            { content: '1asdasdasd23', value: '3' },
            { content: '1asdasdasd23', value: '4' },
            { content: '1asdasdasd23', value: '5' },
        ],
    },
};

export const bottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '1asdasdasd23', value: '1' },
            { content: '1asdasdasd23', value: '2' },
            { content: '1asdasdasd23', value: '3' },
            { content: '1asdasdasd23', value: '4' },
            { content: '1asdasdasd23', value: '5' },
        ],
    },
};

export const bottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '1asdasdasd23', value: '1' },
            { content: '1asdasdasd23', value: '2' },
            { content: '1asdasdasd23', value: '3' },
            { content: '1asdasdasd23', value: '4' },
            { content: '1asdasdasd23', value: '5' },
        ],
    },
};
