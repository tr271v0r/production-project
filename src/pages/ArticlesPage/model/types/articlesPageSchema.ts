import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleSortField, ArticleView, ArticleType,
} from '@/entities/Article';

import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;

    view: ArticleView;

    // pagination
    page:number;
    limit: number;
    hasMore: boolean; // загрузили всё, или что-то еще осталось

    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    // меняется ЕДИНОЖДЫ в момент инициализации кмопонента
    _inited: boolean;
}
