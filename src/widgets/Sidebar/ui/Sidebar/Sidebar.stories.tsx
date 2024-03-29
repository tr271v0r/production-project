import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({})(Story)
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
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
        (Story) => (
            StoreDecorator({
                user: { authData: {} },
            })(Story)
        ),

    ],
    args: {

    },
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            StoreDecorator({
                user: { authData: {} },
            })(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
    args: {

    },
};

export const NoAuth: Story = {
    decorators: [
        (Story) => (
            StoreDecorator({
                user: {},
            })(Story)
        ),
    ],
    args: {

    },
};
