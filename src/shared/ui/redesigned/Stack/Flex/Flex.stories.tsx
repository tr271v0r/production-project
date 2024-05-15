import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'redesigned/shared/Flex',
    component: Flex,
    decorators: [(Story) => ThemeDecorator(Theme.LIGHT)(Story)],
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {
        direction: 'row',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        direction: 'row',
        gap: '4',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap8: Story = {
    args: {
        direction: 'row',
        gap: '8',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        direction: 'row',
        gap: '16',
        children: (
            <div style={{ minWidth: '200px' }}>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const RowGap32: Story = {
    args: {
        direction: 'row',
        gap: '32',
        children: (
            <div>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </div>
        ),
    },
};

export const ColumnGap4: Story = {
    args: {
        direction: 'column',
        gap: '4',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap8: Story = {
    args: {
        direction: 'column',
        gap: '8',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};

export const ColumnGap32: Story = {
    args: {
        direction: 'column',
        gap: '32',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),
    },
};
