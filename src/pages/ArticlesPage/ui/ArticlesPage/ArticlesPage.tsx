import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    // const data = useArticleItemById('1');
    // console.log(data);

    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const [searchParams] = useSearchParams();
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="ArticlesPage"
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
                <ArticlePageGreeting />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
