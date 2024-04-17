import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './addCommentForm.module.scss';
import { HStack } from '@/shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation();

        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);

        const dispatch = useAppDispatch();

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [text, onCommentTextChange, onSendComment]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <HStack
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    max
                    justify="between"
                    data-testid="AddCommentForm"
                >
                    <Input
                        className={cls.input}
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={onCommentTextChange}
                        data-testid="AddCommentForm.Input"
                    />
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSendHandler}
                        data-testid="AddCommentForm.Button"
                    >
                        {t('Отправить')}
                    </Button>
                </HStack>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
