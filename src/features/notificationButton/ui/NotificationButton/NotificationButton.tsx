import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import MotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import MotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Icon
                        Svg={MotificationIcon}
                        clickable
                        onClick={onOpenDrawer}
                    />
                }
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        onClick={onOpenDrawer}
                    >
                        <IconDeprecated Svg={MotificationIconDeprecated} />
                    </ButtonDeprecated>
                }
            />
        );
        return (
            <div>
                <BrowserView>
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Popover
                                trigger={trigger}
                                direction="bottom left"
                                className={classNames('', {}, [className])}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </Popover>
                        }
                        off={
                            <PopoverDeprecated
                                trigger={trigger}
                                direction="bottom left"
                                className={classNames('', {}, [className])}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </PopoverDeprecated>
                        }
                    />
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </div>
        );
    },
);
