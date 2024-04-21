import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;

    isVirtualized?: boolean;
    onLoadNextPart?: () => void;
}

const renderSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

const renderArticles =
    (view: ArticleView, target: HTMLAttributeAnchorTarget | undefined) =>
    (_: number, item: Article) => {
        const { id } = item;
        return (
            <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={id}
                className={cls.card}
            />
        );
    };

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,

        isVirtualized = false,
        onLoadNextPart,
    } = props;

    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    if (isVirtualized) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleList"
            >
                {articles.length > 0 ? (
                    <Virtuoso
                        style={{ height: 300 }}
                        data={articles}
                        endReached={onLoadNextPart}
                        useWindowScroll
                        customScrollParent={
                            document.getElementById('PAGE_ID') as HTMLElement
                        }
                        itemContent={renderArticles(view, target)}
                    />
                ) : null}
                {isLoading && renderSkeletons(view)}
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && renderSkeletons(view)}
        </div>
    );
});
