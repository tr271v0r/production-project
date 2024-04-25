import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Normal: Story = {
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
    ],
    args: {
        width: '50vw',
        height: 200,
    },
};

export const Circle: Story = {
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
    ],
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};

export const NormalDark: Story = {
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.DARK)(Story),
    ],
    args: {
        width: '50vw',
        height: 200,
    },
};

export const CircleDark: Story = {
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.DARK)(Story),
    ],
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
