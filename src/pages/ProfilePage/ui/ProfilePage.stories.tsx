import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },

    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({
                profile: {
                    form: {
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
            })(Story)
        ),
        (Story) => (
            RouterDecorator()(Story)
        ),
    ],
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
    args: {

    },
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
    args: {

    },
};

export const Orange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        ),
    ],
    args: {

    },
};
