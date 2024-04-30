import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();

        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    content: t('Айти'),
                    value: ArticleType.IT,
                },
                {
                    content: t('Экономика'),
                    value: ArticleType.ECONOMICS,
                },
                {
                    content: t('Наука'),
                    value: ArticleType.SCIENCE,
                },
                {
                    content: t('Все статьи'),
                    value: ArticleType.ALL,
                },
            ],
            [t],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType],
        );

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Tabs
                        direction="column"
                        className={classNames('', {}, [className])}
                        tabs={typeTabs}
                        onTabClick={onTabClick}
                        value={value}
                    />
                }
                off={
                    <TabsDeprecated
                        className={classNames('', {}, [className])}
                        tabs={typeTabs}
                        onTabClick={onTabClick}
                        value={value}
                    />
                }
            />
        );
    },
);
