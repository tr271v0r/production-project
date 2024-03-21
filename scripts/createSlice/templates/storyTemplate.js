module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const ${componentName}Light: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        )
    ],
    args: {

    },
};

export const ${componentName}Dark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        )
    ],
    args: {

    },
};

export const ${componentName}Orange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        )
    ],
    args: {

    },
};`;