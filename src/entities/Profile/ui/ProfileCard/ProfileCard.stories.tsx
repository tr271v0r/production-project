import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

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

export const Primary: Story = {
    args: {
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
    },
};

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const isLoading: Story = {
    args: {
        isLoading: true,
    },
};
