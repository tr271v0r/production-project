import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, memo, useRef, UIEvent,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
