import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);// Если id отловился через useParams - режим редактирования статьи, иначе режим создания статьи

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit
                ? t('Редактировать статью')
                : t('Создать статью')}
        </Page>
    );
};

export default memo(ArticleEditPage);
