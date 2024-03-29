import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from 'react-i18next';
import  cls  from './NotificationList.module.scss';
import { memo } from "react";
import { useNotifications } from "../../api/notificationApi";
import { VStack } from "shared/ui/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface NotificationListProps {
    className?: string;
};

export const NotificationList = memo(({className}: NotificationListProps) => {
  const { t } = useTranslation();
  const {data, isLoading, error} = useNotifications(null, {
    pollingInterval: 5000 
  });

  if(isLoading) {
    console.log(className);
    return (
      <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
        <Skeleton width={'100%'} border='8' height={'80px'}/>
        <Skeleton width={'100%'} border='8' height={'80px'}/>
        <Skeleton width={'100%'} border='8' height={'80px'}/>
      </VStack>
    )
  }

  return (
    <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
        {data?.map(notification => (
          <NotificationItem key={notification.id} item={notification}/>
        ))}
    </VStack>
  );
});