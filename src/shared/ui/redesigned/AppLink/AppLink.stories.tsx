import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) =>
            // eslint-disable-next-line no-sequences
            StoreDecorator({})(Story),
        (Story) => RouterDecorator()(Story),
    ],
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'text',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const Red: Story = {
    args: {
        variant: 'red',
    },
};
