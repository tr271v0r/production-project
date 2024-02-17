import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        onClick={onEdit}
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            onClick={onCancelEdit}
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.editBtn}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            onClick={onSave}
                            className={cls.saveBtn}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
