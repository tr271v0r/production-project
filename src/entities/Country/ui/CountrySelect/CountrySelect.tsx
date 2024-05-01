import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { DropdownDirection } from '@/shared/types/ui';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({
        className,
        value,
        onChange,
        readonly,
        direction = 'top right',
    }: CountrySelectProps) => {
        const { t } = useTranslation('profile');

        const onChangeHandler = useCallback(
            (value?: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        const props = {
            className,
            items: options,
            value,
            onChange: onChangeHandler,
            label: t('Страна'),
            defaultValue: t('Страна'),
            readonly,
            direction,
        };

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ListBox {...props} />}
                off={<ListBoxDeprecated {...props} />}
            />
        );
    },
);
