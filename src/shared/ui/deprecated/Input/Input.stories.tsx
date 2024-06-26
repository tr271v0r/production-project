import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'deprecated/shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Clear: Story = {
    args: {
        placeholder: 'Some text',
        value: 'something',
    },
};
