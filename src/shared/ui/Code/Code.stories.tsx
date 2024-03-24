import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const CodeDark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
    args: {
        text:
            'const meta: Meta<typeof Code> = {\n'
            + '   title: \'shared/Code\',\n'
            + '   component: Code,\n'
            + '   parameters: {\n'
            + '       \'layout:\'centered\',\n'
            + '   },\n'
            + '\n'
            + '   tags: [\'autodocs\'],\n'
            + '   argTypes: {\n'
            + '\n'
            + '   },\n'
            + '};\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof Code>;\n',
    },
};

export const CodeLight: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
    ],
    args: {
        text:
            'const meta: Meta<typeof Code> = {\n'
            + '   title: \'shared/Code\',\n'
            + '   component: Code,\n'
            + '   parameters: {\n'
            + '       \'layout:\'centered\',\n'
            + '   },\n'
            + '\n'
            + '   tags: [\'autodocs\'],\n'
            + '   argTypes: {\n'
            + '\n'
            + '   },\n'
            + '};\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof Code>;\n',
    },
};

export const CodeOrange: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.ORANGE)(Story)
        ),
    ],
    args: {
        text:
            'const meta: Meta<typeof Code> = {\n'
            + '   title: \'shared/Code\',\n'
            + '   component: Code,\n'
            + '   parameters: {\n'
            + '       \'layout:\'centered\',\n'
            + '   },\n'
            + '\n'
            + '   tags: [\'autodocs\'],\n'
            + '   argTypes: {\n'
            + '\n'
            + '   },\n'
            + '};\n'
            + 'export default meta;\n'
            + 'type Story = StoryObj<typeof Code>;\n',
    },
};
