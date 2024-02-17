import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
    title: 'enteties/CurrencySelect',
    component: CurrencySelect,
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {

    args: {

    },
};
