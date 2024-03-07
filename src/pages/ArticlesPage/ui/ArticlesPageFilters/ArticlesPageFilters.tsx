import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import  cls  from './ArticlesPageFilters.module.scss';
import { ArticleSortField, ArticleTypeTabs, ArticleView, ArticleViewSelector } from "entities/Article";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";
import { SortOrder } from "shared/types";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article";

interface ArticlesPageFiltersProps {
    className?: string;
};

export const ArticlesPageFilters = memo(({className}: ArticlesPageFiltersProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);
    
    const onChangeSort= useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);
    
    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    // чтобы массив табов был всегда статичный и НЕ ПЕРЕСОЗДАВАЛСЯ
    

    return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
        <div className={cls.sortWrapper}>
            <ArticleSortSelector 
                order={order}
                sort={sort}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}

            />
            <ArticleViewSelector onViewClick={onChangeView} view={view} />
            
        </div>
        <Card className={cls.search}> 
                <Input 
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
        </Card>
        <ArticleTypeTabs 
            value={type}
            onChangeType={onChangeType}
            className={cls.tabs}
        />
    </div>
  );
});