import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
