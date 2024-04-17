import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // для запросов  - query
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
        // для создания, изменения, удаления, обновления данных: .mutation
        // createArticleRecommendation: build.mutation({
        //     query: (limit) => ({
        //         url: '/articles',
        //         params: {
        //             _limit: limit
        //         },
        //         method: 'POST'
        //     }),
        // }),
    }),
    overrideExisting: false,
});

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery;
// export const useCreateArticleRecommendation = recommendationsApi.useCreateArticleRecommendationMutation;
