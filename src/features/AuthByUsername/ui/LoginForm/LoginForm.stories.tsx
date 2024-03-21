import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        )
    ],
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({
                loginForm: {
                    username: '123',
                    password: '123',
                },
            })(Story)
        ),
    ],
};

export const withError: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({
                loginForm: {
                    username: '123',
                    password: '123',
                    error: 'Error auth',
                },
            })(Story)
        ),
    ],
};

export const Loading: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({
                loginForm: { isLoading: true },
            })(Story)
        ),
    ],
};
