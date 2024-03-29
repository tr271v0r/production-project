import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import addCommentForm from './addCommentForm';

const meta: Meta<typeof addCommentForm> = {
    title: 'features/addCommentForm',
    component: addCommentForm,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof addCommentForm>;

export const Light: Story = {
    args: {
        onSendComment: () => {},
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
export const Dark: Story = {
    args: {
        onSendComment: () => {},
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({

            })(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
};
export const Orange: Story = {
    args: {
        onSendComment: () => {},
    },
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            StoreDecorator({

            })(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        ),
    ],
};
