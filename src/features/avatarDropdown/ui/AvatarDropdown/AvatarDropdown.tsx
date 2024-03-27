import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import  cls  from './AvatarDropdown.module.scss';
import { Dropdown } from "shared/ui/Popups";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useTranslation } from 'react-i18next';

import { getUserAuthData, isUserAdmin, isUserModerator, userActions } from 'entities/User';
import { useSelector } from "react-redux";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface AvatarDropdownProps {
    className?: string;
};

export const AvatarDropdown = memo(({className}: AvatarDropdownProps) => {
    const { t } = useTranslation();
    
    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin);
    const isModerator = useSelector(isUserModerator);

    const isAdminPanelAvailable = isAdmin || isModerator;

    const dispatch = useAppDispatch();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(!authData){
        return null;
    }

    return (
        <Dropdown 
            className={classNames(cls.AvatarDropdown, {}, [className])}
            trigger= {<Avatar size={30} src={authData.avatar}/>}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }] : []),
                {content: 'Профиль', href: RoutePath.profile + authData.id},
                {content: 'Выйти', onClick: onLogout},
            ]}
            direction='bottom left'
        />
    );
});