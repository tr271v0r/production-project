import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId';
import { CommentList } from '@/entities/Comment';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    ({ className, id }: ArticleDetailsCommentsProps) => {
        const { t } = useTranslation('article-details');

        const dispatch = useAppDispatch();
        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Комментарии')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Комментарии')}
                        />
                    }
                />

                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
