import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Wow!',
                user: { id: '1', username: 'Oleg' },
            },
            {
                id: '2',
                text: 'Gool',
                user: { id: '1', username: 'Artem Ronaldo' },
            },
        ],
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
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
};

export const LightIssLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
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
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
};
