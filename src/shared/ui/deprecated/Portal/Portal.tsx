import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

/**
 * @deprecated
 */

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.getElementById('storybook-root') ?? document.body,
    } = props;

    return createPortal(children, element);
};
