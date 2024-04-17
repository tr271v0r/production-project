import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
        (Story) => (
            // eslint-disable-next-line no-sequences
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
type Story = StoryObj<typeof CurrencySelect>;

export const Normal: Story = {
    args: {},
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
    },
};
