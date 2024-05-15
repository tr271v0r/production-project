import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'deprecated/shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Normal: Story = {
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
    ],
    args: {
        tabs: [
            {
                value: 'tab_1',
                content: 'Tab 1',
            },
            {
                value: 'tab_2',
                content: 'Tab 2',
            },
            {
                value: 'tab_3',
                content: 'Tab 3',
            },
        ],
        value: 'tab_2',
        onTabClick: action('onTabClick'),
    },
};
