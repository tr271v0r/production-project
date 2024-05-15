import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';
import { DeprecatedDecorator } from '@/shared/config/storybook/DeprecatedDecorator/DeprecatedDecorator';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
    ],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const primaryArgs = {
    data: {
        username: 'admin',
        age: 22,
        city: 'asf',
        country: Country.Belarus,
        currency: Currency.USD,
        first: 'asd',
        lastname: 'kjhgf',
        avatar: AvatarImg,
    },
};

export const Primary: Story = {
    args: primaryArgs,
};

export const PrimaryDeprecated: Story = {
    args: primaryArgs,
    decorators: [(Story) => DeprecatedDecorator(Story)],
};

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const withErrorDeprecated: Story = {
    args: {
        error: 'true',
    },
    decorators: [(Story) => DeprecatedDecorator(Story)],
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const isLoadingDeprecated: Story = {
    args: {
        isLoading: true,
    },
    decorators: [(Story) => DeprecatedDecorator(Story)],
};
