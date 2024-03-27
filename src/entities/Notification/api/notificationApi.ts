import { rtkApi } from "shared/api/rtkApi";
import { Notification } from "../model/types/notifications";

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        // для запросов  - query
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
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
})

export const useNotifications = notificationApi.useGetNotificationsQuery;
//export const useCreateArticleRecommendation = recommendationsApi.useCreateArticleRecommendationMutation;