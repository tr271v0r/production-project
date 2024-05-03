import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DeprecatedDropdown } from '@/shared/ui/deprecated/Popups';
import { Avatar as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';

import {
    getUserAuthData,
    isUserAdmin,
    isUserModerator,
    userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);

    const isAdmin = useSelector(isUserAdmin);
    const isModerator = useSelector(isUserModerator);

    const isAdminPanelAvailable = isAdmin || isModerator;

    const dispatch = useAppDispatch();
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админка'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        { content: 'Настройки', href: getRouteSettings() },
        { content: 'Профиль', href: getRouteProfile(authData.id) },
        { content: 'Выйти', onClick: onLogout },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    className={classNames('', {}, [className])}
                    trigger={<Avatar size={40} src={authData.avatar} />}
                    items={items}
                    direction="bottom left"
                />
            }
            off={
                <DeprecatedDropdown
                    className={classNames('', {}, [className])}
                    trigger={
                        <DeprecatedAvatar
                            fallbackInverted
                            size={30}
                            src={authData.avatar}
                        />
                    }
                    items={items}
                    direction="bottom left"
                />
            }
        />
    );
});
