import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    args: {
        comment: { id: '1', text: 'something', user: { id: '1', username: 'Oleg' } },
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({

            })(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
};

export const LightIsLoading: Story = {
    args: {
        comment: { id: '1', text: 'something', user: { id: '1', username: 'Oleg' } },
        isLoading: true,
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({

            })(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
};
