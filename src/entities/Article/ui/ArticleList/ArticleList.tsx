import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    // const articlesList = useCallback(() => {
    //     if(view === ArticleView.BIG)
    // }, [view])

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}

            {/* <Virtuoso
                style={{ height: '400px' }}
                totalCount={200}
                itemContent={(index) => (
                    <div>
                        Item
                        {index}
                    </div>
                )}
            /> */}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
/*
 <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}

            <Virtuoso
                style={{ height: '400px' }}
                totalCount={200}
                itemContent={index => <div>Item {index}</div>}
            />

            {isLoading && getSkeletons(view)}
        </div>
*/
