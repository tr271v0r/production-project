import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'deprecated/shared/Loader',
    component: Loader,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {},
};

export const Dark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {},
};
