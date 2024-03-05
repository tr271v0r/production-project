import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: React.ReactNode;
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => (
    <div
        className={classNames(cls.Card, {}, [className])}
        {...otherProps}
    >
        {children}
    </div>
));