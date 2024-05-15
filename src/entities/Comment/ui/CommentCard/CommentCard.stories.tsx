import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentCard } from './CommentCard';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import Img from '@/shared/assets/tests/storybook.jpg';
import { DeprecatedDecorator } from '@/shared/config/storybook/DeprecatedDecorator/DeprecatedDecorator';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            StoreDecorator({})(Story),
        (Story) => RouterDecorator()(Story),
        (Story) => ThemeDecorator(Theme.LIGHT)(Story),
    ],
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const normalArgs = {
    comment: {
        id: '1',
        text: 'Hello guys!',
        user: { id: '1', username: 'Oleg Nagib', avatar: Img },
    },
};

export const Normal: Story = {
    args: normalArgs,
};

export const NormalDeprecated: Story = {
    args: normalArgs,
    decorators: [(Story) => DeprecatedDecorator(Story)],
};

const isLoadingArgs = {
    comment: {
        id: '1',
        text: 'something',
        user: { id: '1', username: 'Oleg' },
    },
    isLoading: true,
};

export const NormalIsLoading: Story = {
    args: isLoadingArgs,
};

export const NormalDeprecatedIsLoading: Story = {
    args: isLoadingArgs,
    decorators: [(Story) => DeprecatedDecorator(Story)],
};
