import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFiletrs';

interface ViewContainerSelectorProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    ({ className }: ViewContainerSelectorProps) => {
        const { onChangeView, view } = useArticleFilters();

        return (
            <ArticleViewSelector
                className={className}
                onViewClick={onChangeView}
                view={view}
            />
        );
    },
);
