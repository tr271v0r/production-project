import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { Text } from '@/shared/ui/Text';

interface ArticleInfiniteListProps {
    className?: string;
    onLoadNextPart?: () => void;
}

export const ArticleInfiniteList = memo(
    ({ className, onLoadNextPart }: ArticleInfiniteListProps) => {
        const articles = useSelector(getArticles.selectAll);
        const isLoading = useSelector(getArticlesPageIsLoading);
        const error = useSelector(getArticlesPageError);
        const view = useSelector(getArticlesPageView);

        const { t } = useTranslation();

        if (error) {
            return <Text text={t('Ошибка при загрузке статей')} />;
        }

        return (
            <ArticleList
                className={className}
                isLoading={isLoading}
                view={view}
                articles={articles}
                onLoadNextPart={onLoadNextPart}
            />
        );
    },
);
