import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
import { Portal } from '../Portal/Portal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    // decorators: [
    //     (Story) => (
    //         <Portal
    //             element={document.getElementById('storybook-root')}
    //         >
    //             <Story />
    //         </Portal>
    //     ),
    // ],
    args: {
        isOpen: true,
        children: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
};

export const Dark: Story = {
    decorators: [
        (Story) => (
            ThemeDecorator(Theme.DARK)(Story)
        ),
    ],
    args: {
        isOpen: true,
        children: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
};
