import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';
import { DropdownDirection } from '@/shared/types/ui';

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

        return (
            <ListBox
                className={className}
                items={options}
                value={value}
                onChange={onChangeHandler}
                label={t('Страна')}
                defaultValue={t('Страна')}
                readonly={readonly}
                direction={direction}
            />
        );
    },
);
