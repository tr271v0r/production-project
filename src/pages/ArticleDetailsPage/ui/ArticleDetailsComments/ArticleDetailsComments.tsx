import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from 'react-i18next';
import { AddCommentForm } from "features/addCommentForm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId";
import { CommentList } from "entities/Comment";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { VStack } from "shared/ui/Stack";

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
};

export const ArticleDetailsComments = memo(({className, id}: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation('article-details');

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});