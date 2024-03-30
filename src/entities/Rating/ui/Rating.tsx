import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from 'react-i18next';
import  cls  from './Rating.module.scss';
import { memo, useCallback, useState } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
};

export const Rating = memo((props: RatingProps) => {
  const {
    className,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    title
  } = props;

  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  // useCalbback - чтобы StarRating лишний раз не перерисовывался
  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if(hasFeedback){
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
    setIsModalOpen(true);
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, feedback, onAccept]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap={'32'} max>
      <Text title={feedbackTitle}/>
      <Input 
        placeholder={t('Ваш отзыв')}
        value={feedback} 
        onChange={setFeedback} 
      />
    </VStack>
  );

  return (
    <Card className={classNames(cls.Rating, {}, [className])}>
        <VStack
          align="center"
          gap='8'
        >
          <Text title={title}/>
          <StarRating size={40} onSelect={onSelectStars}/>
        </VStack>
        
        <BrowserView>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            lazy
          >
            <VStack
              align="center"
              gap='8'
            >
              {modalContent}
              <HStack max gap={'16'} justify="center">
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
                <Button onClick={acceptHandle}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer
            isOpen={isModalOpen}
            onClose={cancelHandle}
            lazy
          >
             <VStack
              align="center"
              gap='32'
            >
              {modalContent}
              <Button onClick={acceptHandle} fullWidth>{t('Отправить')}</Button>
            </VStack>
          </Drawer>
        </MobileView>
    </Card>
  );
});