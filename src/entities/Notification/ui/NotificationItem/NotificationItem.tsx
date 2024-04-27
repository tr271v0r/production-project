import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo(
    ({ className, item }: NotificationItemProps) => {
        const content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        className={classNames(cls.NotificationItem, {}, [
                            className,
                        ])}
                    >
                        <Text title={item.title} text={item.description} />
                    </Card>
                }
                off={
                    <CardDeprecated
                        theme={CardTheme.OUTLINE}
                        className={classNames(cls.NotificationItem, {}, [
                            className,
                        ])}
                    >
                        <TextDeprecated
                            title={item.title}
                            text={item.description}
                        />
                    </CardDeprecated>
                }
            />
        );

        if (item.href) {
            return (
                <AppLink to={item.href} target="_blank" className={cls.link}>
                    {content}
                </AppLink>
            );
        }
        return content;
    },
);
