import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/shared/const/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    decorators: [
        (Story) => (
            // eslint-disable-next-line no-sequences
            ThemeDecorator(Theme.LIGHT)(Story),
            RouterDecorator()(Story),
            SuspenseDecorator()(Story)
        ),
    ],
    parameters: {
        decorators: [
            (Story) =>
                // eslint-disable-next-line no-sequences
                StyleDecorator(Story),
        ],
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#e8e8ea' },
                { name: 'dark', class: Theme.DARK, color: '#0e0e75' },
                { name: 'orange', class: Theme.ORANGE, color: '#bd5012' },
            ],
        },
    },
};

export default preview;
