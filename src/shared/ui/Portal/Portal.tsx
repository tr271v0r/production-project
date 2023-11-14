import React from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface PortalProps {
    children: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
