import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import  cls  from './CommentCard.module.scss';
import { Comment } from "../../model/types/comment";
import { Text } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
};

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props;

    if(isLoading){
        return(
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username}/>
                </div>
                <Skeleton className={cls.text} height={50} width={"100%"}/>
            </div>
        )
    }

    return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
           { comment.user.avatar ? (<Avatar size={30} src={comment.user.avatar}/>) : null}
            <Text className={cls.username} title={comment.user.username}/>
        </div>
        <Text className={cls.text} text={comment.text}/>
    </div>
  );
});