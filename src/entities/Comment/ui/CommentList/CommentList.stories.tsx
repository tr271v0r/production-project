import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import Img from 'shared/assets/tests/storybook.jpg' 

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
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
            RouterDecorator()(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'Wow!',
                user: { id: '1', username: 'Oleg Nagib', avatar: Img },
            },
            {
                id: '2',
                text: 'Gool',
                user: { id: '1', username: 'Artem Ronaldo', avatar: Img  },
            },
            {
                id: '3',
                text: 'beat',
                user: { id: '1', username: 'Maxim Chicha', avatar: Img  },
            },
        ],
    },
};

export const IsLoading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};
