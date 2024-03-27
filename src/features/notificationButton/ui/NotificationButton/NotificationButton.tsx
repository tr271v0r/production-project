import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import  cls  from './NotificationButton.module.scss';
import { Popover } from "shared/ui/Popups";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import MotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { NotificationList } from 'entities/Notification';

interface NotificationButtonProps {
    className?: string;
};

export const NotificationButton = memo(({className}: NotificationButtonProps) => {
  return (
        <Popover 
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={MotificationIcon}/>
                </Button>
            }
            direction='bottom left'
            className={classNames('', {}, [className])}
        >
            <NotificationList className={cls.notifications}/>
        </Popover>
  );
});