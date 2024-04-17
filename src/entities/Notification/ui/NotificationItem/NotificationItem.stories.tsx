import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const NotificationLight: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    args: {
        item: {
            id: '1',
            description: 'You should me more polite with regard to friends!',
            title: 'УВАГА',
        },
    },
};

export const NotificationDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        item: {
            id: '1',
            description: 'You should me more polite with regard to friends!',
            title: 'УВАГА',
        },
    },
};
