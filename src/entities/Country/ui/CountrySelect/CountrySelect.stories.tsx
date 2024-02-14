import type { Meta, StoryObj } from '@storybook/react';
import {CountrySelect} from './CountrySelect';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CountrySelect> = {
    title: 'enteties/CountrySelect',
    component: CountrySelect,
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
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
   
    args: {

    },
};
