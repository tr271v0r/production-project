import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: React.ReactNode;
    theme?: CardTheme;
}

export const Card = memo(({ className, children, theme = CardTheme.NORMAL, ...otherProps }: CardProps) => (
    <div
        className={classNames(cls.Card, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </div>
));
