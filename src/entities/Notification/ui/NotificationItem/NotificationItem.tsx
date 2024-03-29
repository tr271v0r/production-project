import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo(({ className, item }: NotificationItemProps) => {
    const content = (
        <Card theme={CardTheme.OUTLINE} className={classNames(cls.NotificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink to={item.href} target="_blank" className={cls.link}>
                {content}
            </AppLink>
        );
    }
    return content;
});
