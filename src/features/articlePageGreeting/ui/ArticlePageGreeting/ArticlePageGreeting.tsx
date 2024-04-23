import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const text = (
        <Text
            title={t('Добро пожаловать в раздел "Статьи"!')}
            text={t(
                'В данном разделе можно найти и выбрать интересную статью для прочтения',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} lazy>
            {text}
        </Modal>
    );
});
