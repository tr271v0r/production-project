import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useState } from "react";
import  cls  from './NotificationButton.module.scss';
import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import MotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification';
import { Drawer } from "shared/ui/Drawer/Drawer";
import { BrowserView, MobileView } from "react-device-detect";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";

interface NotificationButtonProps {
    className?: string;
};

export const NotificationButton = memo(({className}: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);
    

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={MotificationIcon}/>
        </Button>
    )
    return (
        <div>
            <BrowserView>
                <Popover 
                    trigger={trigger}
                    direction='bottom left'
                    className={classNames('', {}, [className])}
                >
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>    
    );
});